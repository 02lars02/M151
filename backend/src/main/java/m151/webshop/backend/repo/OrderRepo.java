package m151.webshop.backend.repo;

import m151.webshop.backend.model.Order;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface OrderRepo extends PagingAndSortingRepository<Order, Integer> {
}
