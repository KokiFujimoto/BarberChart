<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::prefix("/customer")->group(function() {
//     Route::get("/search", "CustomerController@search");
// });

Route::post('/customer/search', [CustomerController::class, 'search']);