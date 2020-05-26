package m151.webshop.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "webshop_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int userId;
    private int productId;

    public Order() {}

    public Order(int userId, int productId) {
        this.userId = userId;
        this.productId = productId;
    }

    public int getId() { return id; }
    public int getUserId() { return userId; }
    public int getProductId() { return productId; }
}
