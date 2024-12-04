<?php

namespace App\Repositores\AuthRepositores;

interface AuthRepositoryInterface
{

    public function login($data);

    public function register($data);

    public function destroy($id);
}
