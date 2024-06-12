<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\URLS;

class URLSController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {

        $URLDuplicate = URLS::where('original_url', $request->url)->first();
        if ($URLDuplicate) {
            return response()->json(['status' => false, 'message' => 'URL already exist', 'data' => $URLDuplicate]);
        }
        $uniqueHash = Str::random(6);
        if (request()->secure()) {
            $hashedUrl = 'https://' . $request->headers->get('Host') . '/' . $uniqueHash;

        } else {
            $hashedUrl = 'http://' . $request->headers->get('Host') . '/' . $uniqueHash;
        }

        $originalUrl = $request->url;
        $req['original_url'] = $originalUrl;
        $req['hashed_url'] = $hashedUrl;

        $data = URLS::create($req);
        return response()->json(['status' => true, 'message' => 'URL successfully added', 'data' => $data], 201);
    }
    /**
     * Get a original URL from hashed.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUrl(Request $request): \Illuminate\Http\JsonResponse
    {

        $originalURL = URLS::where('hashed_url', $request->url)->first();
        if ($originalURL) {
            return response()->json(['status' => true, 'message' => 'URL fetched', 'data' => $originalURL]);
        }

        return response()->json(['status' => false, 'message' => 'URL not found',]);
    }
}
