#!/usr/bin/env pwsh

$ErrorActionPreference = "Stop"
Set-StrictMode -Version 2.0

docfx build ./main/docfx.json --warningsAsErrors $args

copy-item -Force -Recurse ./main/_site/* -Destination "./gh-pages"