package com.jsb.controller.inventory;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsb.constant.AppConstants;
import com.jsb.constant.FieldName;
import com.jsb.constant.ResourceName;
import com.jsb.dto.ListResponse;
import com.jsb.dto.inventory.ProductInventoryResponse;
import com.jsb.dto.inventory.VariantInventoryResponse;
import com.jsb.entity.inventory.DocketVariant;
import com.jsb.entity.product.Product;
import com.jsb.entity.product.Variant;
import com.jsb.exception.ResourceNotFoundException;
import com.jsb.mapper.product.ProductInventoryMapper;
import com.jsb.mapper.product.VariantInventoryMapper;
import com.jsb.projection.inventory.ProductInventory;
import com.jsb.projection.inventory.VariantInventory;
import com.jsb.repository.inventory.DocketVariantRepository;
import com.jsb.repository.product.ProductRepository;
import com.jsb.repository.product.VariantRepository;
import com.jsb.utils.InventoryUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@CrossOrigin(AppConstants.FRONTEND_HOST)
public class InventoryController {

    private ProductRepository productRepository;
    private DocketVariantRepository docketVariantRepository;
    private ProductInventoryMapper productInventoryMapper;
    private VariantRepository variantRepository;
    private VariantInventoryMapper variantInventoryMapper;

    @GetMapping("/product-inventories")
    public ResponseEntity<ListResponse<ProductInventoryResponse>> getProductInventories(
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size
    ) {
        // Lấy danh sách sản phẩm từng được nhập xuất
        Page<Product> products = productRepository.findDocketedProducts(PageRequest.of(page - 1, size));

        List<ProductInventory> productInventories = new ArrayList<>();

        for (Product product : products) {
            ProductInventory productInventory = new ProductInventory();

            productInventory.setProduct(product);

            List<DocketVariant> transactions = docketVariantRepository.findByProductId(product.getId());
            productInventory.setTransactions(transactions);

            Map<String, Integer> inventoryIndices = InventoryUtils.calculateInventoryIndices(transactions);

            productInventory.setInventory(inventoryIndices.get("inventory"));
            productInventory.setWaitingForDelivery(inventoryIndices.get("waitingForDelivery"));
            productInventory.setCanBeSold(inventoryIndices.get("canBeSold"));
            productInventory.setAreComing(inventoryIndices.get("areComing"));

            productInventories.add(productInventory);
        }

        List<ProductInventoryResponse> productInventoryResponses = productInventoryMapper.toResponse(productInventories);

        return ResponseEntity.status(HttpStatus.OK).body(new ListResponse<>(productInventoryResponses, products));
    }

    @GetMapping("/variant-inventories")
    public ResponseEntity<ListResponse<VariantInventoryResponse>> getVariantInventories(
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size
    ) {
        // Lấy danh sách phiên bản sản phẩm từng được nhập xuất
        Page<Variant> variants = variantRepository.findDocketedVariants(PageRequest.of(page - 1, size));

        List<VariantInventory> variantInventories = new ArrayList<>();

        for (Variant variant : variants) {
            VariantInventory variantInventory = new VariantInventory();

            variantInventory.setVariant(variant);

            List<DocketVariant> transactions = docketVariantRepository.findByVariantId(variant.getId());
            variantInventory.setTransactions(transactions);

            Map<String, Integer> inventoryIndices = InventoryUtils.calculateInventoryIndices(transactions);

            variantInventory.setInventory(inventoryIndices.get("inventory"));
            variantInventory.setWaitingForDelivery(inventoryIndices.get("waitingForDelivery"));
            variantInventory.setCanBeSold(inventoryIndices.get("canBeSold"));
            variantInventory.setAreComing(inventoryIndices.get("areComing"));

            variantInventories.add(variantInventory);
        }

        List<VariantInventoryResponse> variantInventoryResponses = variantInventoryMapper.toResponse(variantInventories);

        return ResponseEntity.status(HttpStatus.OK).body(new ListResponse<>(variantInventoryResponses, variants));
    }

    @GetMapping("/variant-inventories/{variantId}")
    public ResponseEntity<VariantInventoryResponse> getVariantInventory(@PathVariable("variantId") Long variantId) {
        Variant variant = variantRepository.findById(variantId)
                .orElseThrow(() -> new ResourceNotFoundException(ResourceName.VARIANT, FieldName.ID, variantId));

        VariantInventory variantInventory = new VariantInventory();

        variantInventory.setVariant(variant);

        List<DocketVariant> transactions = docketVariantRepository.findByVariantId(variant.getId());
        variantInventory.setTransactions(transactions);

        Map<String, Integer> inventoryIndices = InventoryUtils.calculateInventoryIndices(transactions);

        variantInventory.setInventory(inventoryIndices.get("inventory"));
        variantInventory.setWaitingForDelivery(inventoryIndices.get("waitingForDelivery"));
        variantInventory.setCanBeSold(inventoryIndices.get("canBeSold"));
        variantInventory.setAreComing(inventoryIndices.get("areComing"));

        VariantInventoryResponse variantInventoryResponse = variantInventoryMapper.toResponse(variantInventory);

        return ResponseEntity.status(HttpStatus.OK).body(variantInventoryResponse);
    }

}
