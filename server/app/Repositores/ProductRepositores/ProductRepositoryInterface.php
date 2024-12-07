<?php

namespace App\Repositores\ProductRepositores;

interface ProductRepositoryInterface
{
    public function all();
    public function activeAll();
    public function find($id);
    public function create($data);
    public function update($data, $id);
    public function delete($id);
}
