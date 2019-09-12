// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import { XmlObject, XmlXPathSelector } from "@r2-utils-js/_utils/xml-js-mapper";

@XmlObject({
    dc: "http://purl.org/dc/elements/1.1/",
    opf: "http://www.idpf.org/2007/opf",
    xml: "http://www.w3.org/XML/1998/namespace",
})
export class Manifest {

    // XPATH ROOT: /opf:package/opf:manifest/opf:item

    @XmlXPathSelector("@id | @xml:id")
    public ID!: string;

    @XmlXPathSelector("@href")
    public Href!: string;

    @XmlXPathSelector("@media-type")
    public MediaType!: string;

    @XmlXPathSelector("@media-fallback")
    public Fallback!: string;

    @XmlXPathSelector("@properties")
    public Properties!: string;

    @XmlXPathSelector("@media-overlay")
    public MediaOverlay!: string;

    // public inspect(depth: number, opts: any): string | null | undefined {
    //     return undefined;
    // }
}
