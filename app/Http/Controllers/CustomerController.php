<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\D_Customer;

class CustomerController extends Controller
{
    /**
     * 顧客一覧を表示
     * 
     * @return Response
     */
    public function index() {
        dd('test');
    }

    /**
     * 顧客の検索取得
     * 
     * @param Request $request
     * @return Array
     */
    public function search(Request $request) {
        dd($request);
        $customers = D_Customer::all();
        return response()->json($customers);
    }


}
