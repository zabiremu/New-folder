<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post('/login', 'login')->name('login');
    Route::post('/register', 'register')->name('register');
    Route::delete('/destroy/{id}', 'destroy')->name('destroy');
});

Route::controller(ProductController::class)->prefix('product/')->name('product.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::post('/store', 'store')->name('register');
    Route::put('/update/{id}', 'update')->name('update');
    Route::get('/edit/{id}', 'edit')->name('edit');
    Route::delete('/delete/{id}', 'destroy')->name('delete');
});
