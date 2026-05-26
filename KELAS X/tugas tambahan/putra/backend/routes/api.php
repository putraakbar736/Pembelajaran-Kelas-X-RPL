<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/projects', [\App\Http\Controllers\ProjectController::class, 'index']);
Route::post('/contacts', [\App\Http\Controllers\ContactController::class, 'store']);
