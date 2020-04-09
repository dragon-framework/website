<?php 
namespace App\Extension;

class SayYoFunction
{
    public function __construct()
    {
    }

    public function getFunctions(): array
    {
        return [
            'sayYo'
        ];
    }

    public function sayYo()
    {
        return "YoOoOp";
    }
}