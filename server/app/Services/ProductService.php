<?php

namespace App\Services;

use App\Repositores\ProductRepositores\ProductRepositoryInterface;


class ProductService
{
    private $productRepositores;
    public function __construct(ProductRepositoryInterface $productRepositores)
    {
        $this->productRepositores = $productRepositores;
    }

    public function all()
    {
        return $this->productRepositores->all();
    }

    public function activeAll()
    {
        return $this->productRepositores->activeAll();
    }

    public function create($data)
    {
        return $this->productRepositores->create($data);
    }

    public function find($id)
    {
        return $this->productRepositores->find($id);
    }

    public function update($data, $id)
    {
        return $this->productRepositores->update($data, $id);
    }

    public function delete($id)
    {
        return $this->productRepositores->delete($id);
    }
}
