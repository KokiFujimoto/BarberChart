<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\D_Customer;

class CustomerController extends Controller
{
    /**
     * 顧客の検索取得
     * 
     * @param Request $request
     * @return Array
     */
    public function search(Request $request) {
        $customers = D_Customer::all();
        return response()->json($customers);
    }

    public function index() {
        dd('test');
    }
}
