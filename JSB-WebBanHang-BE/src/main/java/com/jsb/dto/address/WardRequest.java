package com.jsb.dto.address;

import lombok.Data;

@Data
public class WardRequest {
    private String name;
    private String code;
    private Long districtId;
}
