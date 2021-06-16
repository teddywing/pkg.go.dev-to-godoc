// ==UserScript==
// @name Pkg.go.dev to Godoc
// @description Redirect pkg.go.dev pages to godocs.io
// @namespace com.teddywing
// @version 0.0.1
// @match https://pkg.go.dev/*
// ==/UserScript==

// Copyright (c) 2021  Teddy Wing
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.


window.location.assign(
	window.location.href.replace('pkg.go.dev', 'godocs.io')
);
