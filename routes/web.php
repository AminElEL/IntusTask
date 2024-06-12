<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\URLSController;

Route::post("/hash-url",[URLSController::class, 'store']);
Route::post("/original-url",[URLSController::class, 'getUrl']);
Route::get('/{vue_capture?}', function() {
    return view('welcome');
})->where('vue_capture', '[\/\w\.-]*');
