package com.jsb.dto.customer;

import lombok.Data;

@Data
public class CustomerStatusRequest {
    private String code;
    private String name;
    private String description;
    private String color;
    private Integer status;
}
