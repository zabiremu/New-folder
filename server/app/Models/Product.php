<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['product_name', 'stock', 'price', 'trade_offer_status', 'discount', 'trade_offer_min_qty', 'trade_offer_get_qty', 'discount_or_trade_offer_start_date', 'discount_or_trade_offer_end_date'];
}
