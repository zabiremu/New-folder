<?php

namespace App\Providers;

use App\Services\AuthService;
use App\Services\ProductService;
use Illuminate\Support\ServiceProvider;
use App\Repositores\AuthRepositores\AuthRepository;
use App\Repositores\ProductRepositores\ProductRepository;
use App\Repositores\AuthRepositores\AuthRepositoryInterface;
use App\Repositores\ProductRepositores\ProductRepositoryInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AuthRepositoryInterface::class, AuthRepository::class);
        $this->app->bind(AuthService::class, concrete: function ($app) {
            return new AuthService($app->make(AuthRepositoryInterface::class));
        });
        $this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
        $this->app->bind(ProductService::class, concrete: function ($app) {
            return new ProductService($app->make(ProductRepositoryInterface::class));
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
