<?php
namespace App\Controllers\Admin;

use App\Models\BooksModel;
use Dragon\Component\Controller\AbstractAdminController;
use Dragon\Component\Database\Query;

class BooksController extends AbstractAdminController
{
    public function index()
    {

        // dd("Back Books Index");

        // return $this->render("pages/books/index.html", [
        // ]);

        // Query
        // --

        // A. Make query by the AbstractController

        // A.1. In case of Multiple database, you can reset the database statement definition
        // $this->setDatabaseStatement('main');

        // A.2. Execute
        $books = $this->findAll([
            // Query::COLUMNS => ["title", "id"], // Selected columns

            // Query::DISTINCT => true, // To generate SELECT DISTINCT or SELECT COUNT(DISTINCT Country)

            // Query::CRITERIAS => ["id" => 2], // To generate WHERE
            // Query::CRITERIAS => [
            //         [
            //             'key'       => "id",
            //             'value'     => 2,
            //             'type'      => Query::PARAM_INT,
            //             'relation'  => Query::EQUAL,
            //         ],
            //         'truc'  => 42, 
            //         // 'title' => "test"
            //     ], // To generate WHERE

            // Query::ORDERBY => "title",
            // Query::ORDERBY => ["title"],
            // Query::ORDERBY => ["title", "truc" => Query::ORDERDIR_DESC],
            // Query::ORDERBY => ["title" => Query::ORDERDIR_DESC],

            Query::LIMIT => 10,
            // Query::OFFSET => 5,
        ]);

        // dump( $this->findBy([
        //     [
        //         'key'       => "id",
        //         'value'     => 2,
        //         'type'      => Query::PARAM_INT,
        //         'relation'  => Query::EQUAL,
        //     ],
        //     // 'truc'  => 42, 
        //     // 'title' => "test"
        // ]));


        // B. Make query by the EntityModel

        // B.1. Get the Model
        $model = new BooksModel;
        
        // B.2. In case of Multiple database, you can reset the database statement definition
        // $model->setDatabaseStatementDefinition('test');

        // B.3. Execute
        // $books = $model->findAll();

        // dump( $books );
        // $books = [];




        // dump( $model->findBy(['id' => 2]));
        // dump( $model->findBy(['id' => 2], Query::RELATION_OR));
        // dump( $model->findBy([
        //     'id' => 2, 
        //     'title' => "test"
        // ]));
        // dump( $model->findBy([
        //     [
        //         'key'       => "id",
        //         'value'     => 2,
        //         'type'      => Query::PARAM_INT,
        //         'relation'  => Query::EQUAL,
        //     ],
        //     // 'truc'  => 42, 
        //     // 'title' => "test"
        // ]));
        // dump( $model->findBy(['id' => 2, 'title' => "test"], Query::RELATION_OR));
        // dump( $model->findBy(['id' => 2, 'title' => "test"], Query::RELATION_OR, ["title", "id"]));
        




        return $this->render("pages/books/index.html", [
            'books' => $books
        ]);
    }
    public function create()
    {
        # code...
    }

    /**
     * Read details of one entity
     *
     * @return void
     */
    public function read()
    {
        // Retrieve Request data
        // --

        $id = $this->request()->query()->get('id');


        // Query
        // --

        // A. Make query by the AbstractController

        // A.1. In case of Multiple database, you can reset the database statement definition
        // $this->setDatabaseStatement('main');

        // A.2. Execute
        // $book = $this->find($id);
        // $book = $this->find($id, ["title"]);

        // B. Make query by the EntityModel

        // B.1. Get the Model
        $model = new BooksModel;
        
        // B.2. In case of Multiple database, you can reset the database statement definition
        // $model->setDatabaseStatementDefinition('main');

        // B.3. Execute
        $book = $model->find($id);
        // $book = $model->find($id, ["title"]);


        // Render view
        // --

        return $this->render("pages/books/read.html", [
            'book' => $book
        ]);
    }

    public function update()
    {
        # code...
    }

    public function delete()
    {
        # code...
    }
}