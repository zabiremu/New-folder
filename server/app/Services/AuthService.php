<?php

namespace App\Services;

use App\Repositores\AuthRepositores\AuthRepositoryInterface;

class AuthService
{
    public function __construct(
        protected AuthRepositoryInterface $AuthRepositoryInterface
    ) {}

    public function login($data)
    {
        return $this->AuthRepositoryInterface->login($data);
    }

    public function register($data)
    {
        return $this->AuthRepositoryInterface->register($data);
    }

    public function destroy($id)
    {
        return $this->AuthRepositoryInterface->destroy($id);
    }
}
