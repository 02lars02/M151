package m151.webshop.backend.controller;

import m151.webshop.backend.model.Product;
import m151.webshop.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/product")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/all")
    public List<Product> getAll() {
        return productService.getAll();
    }

    @GetMapping("/info/{id}")
    public Product getInfo(@PathVariable int id) {
        return productService.getInfo(id);
    }

    @PostMapping("/add")
    @ResponseStatus(code = HttpStatus.OK)
    public void add(@RequestBody Product fruit) {
        productService.add(fruit);
    }

    @GetMapping("/delete/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public void delete(@PathVariable int id) { productService.delete(id); }
}
