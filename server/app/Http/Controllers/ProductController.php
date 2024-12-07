<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct(private ProductService $productService) {}
    public function index()
    {
        try {
            $data = $this->productService->all();
            return response()->json(["status" => 200, "message" => 'Succesfully send product all', 'data' => $data]);
        } catch (\Exception $e) {
            return response()->json(['status' => 500, 'message' => $e->getMessage()]);
        }
    }
    public function store(Request $request)
    {
        try {
            $data = $request->products;
            $this->productService->create($data);
            return response()->json(["status" => 201, "message" => 'Succesfully product create']);
        } catch (\Exception $e) {
            return response()->json(['status' => 500, 'message' => $e->getMessage()]);
        }
    }
    public function update(Request $request, $id)
    {
        $data = $request->products;
        $this->productService->update($data, $id);
        return response()->json(["status" => 200, "message" => 'Succesfully product update']);
    }
    public function edit($id)
    {
        try {
            $data = $this->productService->find($id);
            return response()->json(["status" => 200, "message" => 'Succesfully send product edit', 'data' => $data]);
        } catch (\Exception $e) {
            return response()->json(['status' => 500, 'message' => $e->getMessage()]);
        }
    }
    public function destroy($id) {}
}
