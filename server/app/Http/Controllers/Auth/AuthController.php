<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAuthRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(private AuthService $authService) {}
    public function login(Request $request)
    {
        $data = $request->all();
        return $this->authService->login($data);
    }

    public function register(StoreAuthRequest $request)
    {
        $data = $request->validated();
        return $this->authService->register($data);
    }

    public function destroy($id)
    {
        return $this->authService->destroy($id);
    }
}
