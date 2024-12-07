<?php

namespace App\Repositores\AuthRepositores;

use App\Models\User;
use App\Repositores\AuthRepositores\AuthRepositoryInterface;
use Illuminate\Support\Facades\Hash;

class AuthRepository implements AuthRepositoryInterface
{
    public $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function login($data)
    {
        $user = $this->user->where('email', $data['user_info'])->orWhere('user_name', $data['user_info'])->first();
        // Check if user email or username matches
        if ($user) {
            // Check if the password is correct
            if (Hash::check($data['password'], $user->password)) {
                // Create token
                $token = $user->createToken('token-name')->plainTextToken;
                return response()->json([
                    'status' => 200,
                    'message' => 'User logged in successfully',
                    'token' => $token,
                    'data' => $user
                ]);
            } else {
                return response()->json([
                    'status' => 401,
                    'message' => 'Unauthorized: Incorrect password'
                ]);
            }
        }
        return response()->json([
            'status' => 404,
            'message' => 'User not found'
        ]);
    }

    public function register($data)
    {
        try {
            $data['password'] = Hash::make($data['password']);
            $this->user->insert($data);
            return response()->json(['status' => 200, 'message' => 'User registered successfully']);
        } catch (\Exception $e) {
            return response()->json(['status' => 500, 'message' => $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        $user = $this->user->findOrFail($id);
        $user->tokens->each(function ($token) {
            $token->delete();
        });
        return response()->json(['status' => 200, 'message' => 'User logged out successfully']);
    }
}
