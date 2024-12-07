<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_name')->nullable();
            $table->double('stock')->nullable();
            $table->double('price')->nullable();
            $table->double('discount')->nullable();
            $table->string('trade_offer_status')->nullable();
            $table->double('trade_offer_min_qty')->nullable();
            $table->double('trade_offer_get_qty')->nullable();
            $table->dateTime('discount_or_trade_offer_start_date')->nullable();
            $table->dateTime('discount_or_trade_offer_end_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
