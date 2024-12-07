<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct(private AuthService $authService) {}
    public function login(Request $request)
    {
        $data = $request->all();
        return $this->authService->login($data);
    }

    public function register(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'email' => 'required|email|string|unique:users,email',
                'user_name' => 'required|string|unique:users,user_name',
                'password' => 'required|string|min:8',
                'confirm_password' => 'required|string|min:8|same:password',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = $request->all();
        unset($data['confirm_password']);
        return $this->authService->register($data);
    }

    public function destroy($id)
    {
        return $this->authService->destroy($id);
    }
}
