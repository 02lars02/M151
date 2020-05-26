package m151.webshop.backend.service;

import m151.webshop.backend.model.Order;
import m151.webshop.backend.model.Product;
import m151.webshop.backend.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class OrderService {
    @Autowired
    OrderRepo orderRepo;

    public List<Order> getAll() {
        Iterable<Order> orders = orderRepo.findAll();
        List<Order> orderList = new ArrayList<>();
        orders.forEach(orderList::add);
        return orderList;
    }

    public void add(Order order) { orderRepo.save(order); }
}
