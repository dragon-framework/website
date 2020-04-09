<?php 
namespace App\Extension;

class DumpFunction
{
    public function getFunctions(): array
    {
        return [
            'dump'
        ];
    }

    public function dump($data)
    {
        dump( $data );
    }
}