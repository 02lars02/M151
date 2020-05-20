package m151.webshop.backend.service;

import m151.webshop.backend.model.Product;
import m151.webshop.backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
@Transactional
public class ProductService {
    @Autowired
    ProductRepo productRepo;

    public List<Product> getAll() {
        Iterable<Product> products = productRepo.findAll();
        return StreamSupport.stream(products.spliterator(), false).collect(Collectors.toList());
    }

    public Product getInfo(int id) { return productRepo.findById(id); }
}
