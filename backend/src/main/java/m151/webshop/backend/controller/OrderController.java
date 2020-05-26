package m151.webshop.backend.controller;

import m151.webshop.backend.model.Order;
import m151.webshop.backend.model.Product;
import m151.webshop.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/order")
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping("/all")
    public List<Order> getAll() {
        return orderService.getAll();
    }

    @PostMapping("/add")
    @ResponseStatus(code = HttpStatus.OK)
    public void add(@RequestBody Order order) {
        orderService.add(order);
    }
}
