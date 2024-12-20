package com.jsb.dto.inventory;

import lombok.Data;

@Data
public class PurchaseOrderVariantRequest {
    private Long variantId;
    private Double cost;
    private Integer quantity;
    private Double amount;
}
