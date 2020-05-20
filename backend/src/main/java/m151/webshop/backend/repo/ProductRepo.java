package m151.webshop.backend.repo;

import m151.webshop.backend.model.Product;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ProductRepo extends PagingAndSortingRepository<Product, Integer> {
    Product findById(int id);
}
