<?php

namespace App\Providers;

use App\Repositores\AuthRepositores\AuthRepository;
use App\Repositores\AuthRepositores\AuthRepositoryInterface;
use App\Services\AuthService;
use Illuminate\Support\ServiceProvider;

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
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
