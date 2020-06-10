package m151.webshop.backend.service;

import m151.webshop.backend.model.Product;
import m151.webshop.backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class ProductService {
    @Autowired
    ProductRepo productRepo;

    public List<Product> getAll() {
        Iterable<Product> products = productRepo.findAll();
        List<Product> productsList = new ArrayList<>();
        products.forEach(productsList::add);
        return productsList;
    }

    public Product getInfo(int id) { return productRepo.findById(id); }

    public void add(Product product) { productRepo.save(product); }

    public void delete(int id) { productRepo.deleteById(id); }
}
