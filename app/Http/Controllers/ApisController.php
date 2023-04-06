<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\judges;
use App\Models\Dogs;
class ApisController extends Controller
{
    //

    public function dataAjax(Request $request)
    {
    
        if($request->has('q')){
            $search = $request->q;
            $data =judges::select("id","full_name")
            		->where('full_name','LIKE',"%$search%")
            		->get();
        }
        return response()->json($data);
    }

    public function AjaxDog(Request $request)
    {
        if($request->has('q')){
            $search = $request->q;
            $data = dogs::select("id","dog_name")
                    ->where('dog_name','LIKE',"%$search%")
                    ->where('gender', '=', 'Male')
                    ->get();
        }else{
            $data = dogs::select("id","dog_name")
            ->where('gender', '=', 'Male')
                    ->get();
        }
        return response()->json($data);
    }

    public function AjaxDog_Fe(Request $request)
    {
        if($request->has('q')){
            $search = $request->q;
            $data = dogs::select("id","dog_name")
                    ->where('dog_name','LIKE',"%$search%")
                    ->where('gender', '=', 'Female')
                    ->get();
        }else{
            $data = dogs::select("id","dog_name")
            ->where('gender', '=', 'Female')
                    ->get();
        }
        return response()->json($data);
    }

   
}
