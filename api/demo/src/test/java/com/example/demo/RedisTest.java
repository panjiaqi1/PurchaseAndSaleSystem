package com.example.demo;

import com.example.demo.entity.Good;
import com.example.demo.mapper.GoodMapper;
import com.example.demo.service.GoodService;
import org.junit.jupiter.api.Test;
import org.redisson.api.RLock;
import org.redisson.api.RedissonClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Random;

@SpringBootTest
class RedisTest {
    private Logger logger = LoggerFactory.getLogger(RedisTest.class);
    @Autowired
    GoodMapper goodMapper;
    @Autowired
    GoodService goodService;

    @Autowired
    RedissonClient redissonClient;

    /**
     * 缓存测试
     */
    @Test
    public void cacheTest() {
        Good good = new Good();
        good.setStock(Math.abs(new Random().nextInt()));
        this.goodMapper.save(good);

        Good good1 = new Good();
        good1.setStock(Math.abs(new Random().nextInt()));
        this.goodMapper.save(good1);

        // 第一次查询，执行了sql语句
        this.goodMapper.findStockById(good.getId());
        this.goodMapper.findStockById(good1.getId());

        // 第二次查询，取redis缓存，未执行sql语句
        this.goodMapper.findStockById(good.getId());
        this.goodMapper.findStockById(good1.getId());

        // 更新good的库存（自动清空good的缓存）
        this.goodService.updateStockById(good.getId(), null);

        // 再次查询good的库存，缓存已被清空，执行sql语句
        this.goodMapper.findStockById(good.getId());

        // 查询good1的库存，取redis缓存，并未执行sql语句
        this.goodMapper.findStockById(good1.getId());
    }

    /**
     * redis锁测试
     */
    @Test
    public void lockTest() throws InterruptedException {
        Good good = new Good();
        good.setStock(Math.abs(new Random().nextInt()));
        this.goodMapper.save(good);

        // 创建线程1，执行更新库存操作
        logger.info("线程1执行");
        new Thread(() -> this.updateStock(good, 10)).start();
        // 启动线程2，执行更新库存操作
        logger.info("线程2执行");
        new Thread(() -> this.updateStock(good, 100)).start();

        Thread.sleep(3000L);
    }

    public void updateStock(Good good, Integer stock) {
        // 获取此good的公平锁
        RLock lock = this.redissonClient.getFairLock("good_" + good.getId().toString());
        // 上锁
        try {
            logger.info("尝试上锁" + stock);
            lock.lock();
            logger.info("上锁成功" + stock);

            Thread.sleep(1000);

            // 获取上锁后的最新数据后更新库存
            good = this.goodMapper.findById(good.getId()).get();
            good.setStock(good.getStock() + stock);
            if (good.getStock().compareTo(0) < 0) {
                throw new RuntimeException("库存不足");
            }
            this.goodMapper.save(good);
        } catch (InterruptedException e) {
            // sleep可能引发异常
        } finally {
            // 在finally中解锁
            logger.info("解锁成功" + stock);
            lock.unlock();
        }
    }

}