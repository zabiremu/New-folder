<?php

namespace App\Repositores\ProductRepositores;

use App\Models\Product;
use App\Repositores\ProductRepositores\ProductRepositoryInterface;

class ProductRepository implements ProductRepositoryInterface
{
    public function all()
    {
        return Product::all();
    }

    public function activeAll()
    {
        return Product::where('status', 'active')->get();
    }

    public function create($data)
    {
        return Product::create($data);
    }

    public function find($id)
    {
        return Product::findOrFail($id);
    }

    public function update($data, $id)
    {
        $Product =  Product::findOrFail($id);
        $Product->update($data);
        return $Product;
    }

    public function delete($id)
    {
        return Product::findOrFail($id)->delete();
    }
}
