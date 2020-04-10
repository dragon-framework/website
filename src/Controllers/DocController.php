<?php 
namespace App\Controllers;

use Dragon\Component\Controller\AbstractController;
use Dragon\Component\Directory\Directory;

use Michelf\MarkdownExtra;

class DocController extends AbstractController
{
    const DOC_DIRECTORY = Directory::DIRECTORY_APP_BASE.DS."/doc";

    private function getSections(): array
    {
        $regex_md = "/\.md$/";
        $doc_files = scandir(self::DOC_DIRECTORY);
        $doc_sections = [];

        foreach ($doc_files as $key => $file)
        {
            if (preg_match($regex_md, $file))
            {
                $label = preg_replace($regex_md, null, $file);
                $path  = strtolower($label);
                $md5   = md5($path);

                array_push($doc_sections, [
                    'path'  => $path,
                    'md5'   => $md5,
                    'label' => $label,
                ]);
            }
        }

        return $doc_sections;
    }

    private function getSection(string $md5)
    {
        $regex_md = "/\.md$/";
        $doc_files = scandir(self::DOC_DIRECTORY);

        foreach ($doc_files as $file)
        {
            $label = preg_replace($regex_md, null, $file);
            $path  = strtolower($label);

            switch (true)
            {
                case $md5 == md5($path):
                    $test = self::DOC_DIRECTORY."/".$file;
                    $md = file_get_contents($test);
                    return MarkdownExtra::defaultTransform($md);
            }
        }
        
        return null;
    }

    public function index()
    {
        return $this->render("doc/index.html", [
            'sections' => $this->getSections()
        ]);
    }

    public function section(string $section, string $md5)
    {
        return $this->render("doc/section.html", [
            'sections' => $this->getSections(),
            'section' => $this->getSection($md5)
        ]);
    }
}