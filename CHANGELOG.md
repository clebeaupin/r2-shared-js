# Next

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.68...develop

Changes:
* TODO

# 1.0.68

> Build environment: NodeJS `18.16.0`, NPM `9.8.0`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.68/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.68/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.68

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.67...v1.0.68

# 1.0.67

> Build environment: NodeJS `18.14.2`, NPM `9.5.1`

Changes:
* Fix: added support for new / modern accessibility metadata, whilst preserving support for legacy JSON structure (so as to not break existing consumers)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.67/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.67/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.67

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.66...v1.0.67

# 1.0.66

> Build environment: NodeJS `18.14.2`, NPM `9.5.1`

Changes:
* NPM package updates
* fix: encryption.xml with percent-encoded URIs (decode before compare with WebPubManifest already-decoded by package.opf XML-to-JSON converter)
* fix: encrypted TOC is ignored
* fix (workaround): linear=no in fixed layout publications is ignored, due to Apple iBooks / Books.app setting a precedent (authored FXL books with non-linear cover image as first spine item do exist, unfortunately this breaks spread left/right ordering if we apply the logical interpretation of linear=no :(
* feat: added highlight text before/after raw (not normalised with whitespace collapse) in existing data structure (actual engine changes in navigator component)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.66/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.66/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.66

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.65...v1.0.66

# 1.0.65

> Build environment: NodeJS `18.12.1`, NPM `9.1.2`

Changes:
* Fix: EPUB fixed-layout pre-paginated publications, parsing of spine items properties rendition-prefixed page-spread-left/center/right metadata.

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.65/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.65/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.65

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.64...v1.0.65

# 1.0.64

> Build environment: NodeJS `18.12.1`, NPM `9.1.1`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.64/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.64/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.64

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.63...v1.0.64

# 1.0.63

> Build environment: NodeJS `16.18.0`, NPM `8.19.2`

Changes:
* Fixed EPUB OPF a11y metadata parsing (link rel attribute)
* Added dual meta/link dcterms:conformsTo a11y metadata parsing

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.63/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.63/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.63

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.62...v1.0.63

# 1.0.62

> Build environment: NodeJS `16.18.0`, NPM `8.19.2`

Changes:
* Fix DAISY 2.02 HTML NCC metadata parsing: multimedia type default to full text audio

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.62/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.62/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.62

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.61...v1.0.62

# 1.0.61

> Build environment: NodeJS `16.17.0`, NPM `8.19.1`

Changes:
* Fix metadata multilingual parsing (xml:lang in package OPF): exception for RTL locales that convey direction, a11y:summary is not language sensitive (no translations) but can carry direction too
* Fix incorrectly-generated "unknown" metadata in RWPM JSON (duplicate keys)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.61/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.61/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.61

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.60...v1.0.61

# 1.0.60

> Build environment: NodeJS `16.17.0`, NPM `8.19.1`

Changes:
* Fixed parsing of xml:lang in package OPF for metadata title, subtitle, contributors (authors, publishers, etc.), subjects, a11y-summary (see https://github.com/edrlab/thorium-reader-epub-tests/issues/18 )

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.60/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.60/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.60

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.59...v1.0.60

# 1.0.59

> Build environment: NodeJS `16.14.2`, NPM `8.5.5`

Changes:
* NPM package updates
* Fixed cpy-cli (--flat)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.59/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.59/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.59

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.58...v1.0.59

# 1.0.58

> Build environment: NodeJS `16.14.2`, NPM `8.5.5`

Changes:
* Fixed NPM package lockfile (was corrupted)
* Added fallback for metadata published/modified date parsing (EPUB v2/3 and DAISY v2/3)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.58/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.58/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.58

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.57...v1.0.58

# 1.0.57

> Build environment: NodeJS `16.14.2`, NPM `8.5.5`

Changes:
* NPM package updates
* Fixed metadata published/modified date parsing (EPUB v2/3 and DAISY v2/3)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.57/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.57/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.57

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.56...v1.0.57

# 1.0.56

> Build environment: NodeJS `16.14.0`, NPM `8.5.3`

Changes:
* NPM package updates
* Fixed HTML / XML decoding bug in DAISY parser

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.56/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.56/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.56

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.55...v1.0.56

# 1.0.55

> Build environment: NodeJS `16.13.1`, NPM `8.3.0`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.55/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.55/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.55

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.54...v1.0.55

# 1.0.54

> Build environment: NodeJS `14.18.1`, NPM `6.14.15`

Changes:
* NPM package updates
* NodeJS v16 minimum requirement (NPM 8)
* DAISY 2 support (audio-only with TOC and sub-phrases, as well as full-text full-audio)
* CLI utility to generate audio-only ReadiumWebPubManifest external JSON from DAISY audio book

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.54/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.54/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.54

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.53...v1.0.54

# 1.0.53

> Build environment: NodeJS `14.18.1`, NPM `6.14.15`

Changes:
* NPM package updates
* NodeJS v14 minimum requirement

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.53/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.53/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.53

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.52...v1.0.53

# 1.0.52

> Build environment: NodeJS `14.17.5`, NPM `6.14.14`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.52/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.52/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.52

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.51...v1.0.52

# 1.0.51

> Build environment: NodeJS `14.16.1`, NPM `6.14.13`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.51/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.51/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.51

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.50...v1.0.51

# 1.0.50

> Build environment: NodeJS `14.16.0`, NPM `6.14.12`

Changes:
* DAISY3 support: relax OPF detection to allow subfolder(s)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.50/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.50/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.50

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.49...v1.0.50

# 1.0.49

> Build environment: NodeJS `14.15.1`, NPM `6.14.10`

Changes:
* Fixed LCP PDF handling (webpub type discovery before parsing)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.49/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.49/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.49

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.48...v1.0.49

# 1.0.48

> Build environment: NodeJS `14.15.1`, NPM `6.14.10`

Changes:
* NPM package updates
* Support for DAISY3 audio-only talking books (conversion to EPUB3 Media Overlays)
* Added parsing of NCX audio NavLabels, and preserved in ReadiumWebPubManifest Table of Contents, Page List, Landmarks, etc. (alternate links with URI Media Fragments)
* Fixed DAISY3 DTBook XHTML in full text+audio converter

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.48/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.48/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.48

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.47...v1.0.48

# 1.0.47

> Build environment: NodeJS `14.15.1`, NPM `6.14.9`

Changes:
* NPM package updates (including fixed TA-JSON for class inheritance hierarchy and custom additional JSON properties)
* Added missing support for Number type converter in XML deserialization

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.47/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.47/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.47

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.46...v1.0.47

# 1.0.46

> Build environment: NodeJS `14.15.0`, NPM `6.14.8`

Changes:
* Fixed severe metadata parsing bug (code typo which skipped conditional branch)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.46/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.46/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.46

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.45...v1.0.46

# 1.0.45

> Build environment: NodeJS `14.15.0`, NPM `6.14.8`

Changes:
* Support for DAISY text-only publications (including multiple DTBOOK XML documents in the spine / reading order)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.45/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.45/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.45

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.44...v1.0.45

# 1.0.44

> Build environment: NodeJS `14.15.0`, NPM `6.14.8`

Changes:
* Fixed weird edge case in DAISY books with messed-up XML namespaces

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.44/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.44/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.44

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.43...v1.0.44

# 1.0.43

> Build environment: NodeJS `14.15.0`, NPM `6.14.8`

Changes:
* Added support for DAISY publications with multiple DTBOOK XML documents (and multiple SMIL in the spine)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.43/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.43/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.43

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.42...v1.0.43

# 1.0.42

> Build environment: NodeJS `14.15.0`, NPM `6.14.8`

Changes:
* Fixed regression in surface public API

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.42/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.42/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.42

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.41...v1.0.42

# 1.0.41

> Build environment: NodeJS `14.15.0`, NPM `6.14.8`

Changes:
* Improved support for DAISY3 audio-text and text-only publications: resilience for missing DocTitle, and lacking XML namespaces
* Parse and preserve non-supported EPUB and DAISY metadata into JSON in-memory data model

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.41/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.41/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.41

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.40...v1.0.41

# 1.0.40

> Build environment: NodeJS `14.15.0`, NPM `6.14.8`

Changes:
* NPM package updates
* Support for DAISY3 audio-text and text-only publications, by converting to Readium Webpub Manifest (with EPUB3 Media Overlays)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.40/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.40/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.40

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.39...v1.0.40

# 1.0.39

> Build environment: NodeJS `12.18.2`, NPM `6.14.7`

Changes:
* NPM package updates
* Support for Divina Readium webpub manifest

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.39/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.39/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.39

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.38...v1.0.39

# 1.0.38

> Build environment: NodeJS `12.18.2`, NPM `6.14.5`

Changes:
* NPM package updates
* TypeScript const enum safeguard (isolated modules)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.38/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.38/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.38

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.37...v1.0.38

# 1.0.37

> Build environment: NodeJS `12.18.1`, NPM `6.14.5`

Changes:
* NPM package updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.37/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.37/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.37

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.36...v1.0.37

# 1.0.36

> Build environment: NodeJS `12.16.3`, NPM `6.14.5`

Changes:
* NPM package updates
* EPUB Media Overlays / W3C Sync Media alignment

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.36/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.36/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.36

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.35...v1.0.36

# 1.0.35

> Build environment: NodeJS `12.16.1`, NPM `6.14.4`

Changes:
* Fixed accessibility metadata: summary is now multilingual string, and access mode sufficient is now de-linearized from comma-separated string (as parsed from EPUB, versus W3C Web Publications which implement the array of string tokens natively)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.35/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.35/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.35

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.34...v1.0.35

# 1.0.34

> Build environment: NodeJS `12.16.1`, NPM `6.14.4`

Changes:
* Fixed crash when opening EPUBs with no Metadata Links (code typo)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.34/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.34/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.34

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.33...v1.0.34

# 1.0.33

> Build environment: NodeJS `12.16.1`, NPM `6.14.4`

Changes:
* Added missing "alternate" property on Link object (latest JSON Schema for Readium Web Pub Manifest). It's just like "children".

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.33/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.33/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.33

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.32...v1.0.33

# 1.0.32

> Build environment: NodeJS `12.16.1`, NPM `6.14.4`

Changes:
* Accessibility metadata parsing: convenient helper function for accessModeSufficient, outputs normalized array of array-of-strings format, canonical decomposition with duplicates removal, whitespace elimination, and preserved order after the cleanup pass. See https://github.com/readium/architecture/issues/94#issuecomment-614094205

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.32/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.32/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.32

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.31...v1.0.32

# 1.0.31

> Build environment: NodeJS `12.16.1`, NPM `6.14.4`

Changes:
* Accessibility metadata parsing

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.31/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.31/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.31

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.30...v1.0.31

# 1.0.30

> Build environment: NodeJS `12.16.1`, NPM `6.14.4`

Changes:
* NPM package updates
* Additional file extensions for Readium audiobooks

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.30/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.30/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.30

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.29...v1.0.30

# 1.0.29

> Build environment: NodeJS `12.16.1`, NPM `6.14.4`

Changes:
* NPM package updates
* LCP audiobook support (parsing)
* Cson2Json build script fix

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.29/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.29/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.29

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.28...v1.0.29

# 1.0.28

> Build environment: NodeJS `12.16.1`, NPM `6.14.4`

Changes:
* NPM package updates
* camel case pageList JSON property with support for legacy page-list
* fixes incorrect path in zipHasEntry (fallback to raw authored path, potentially percent-escaped), and replaced console.log() with debug().
* added resource URL to transformer parameter
* HTML transformer should not contains FXL vs. reflow heuristics (FXL audio/video patch)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.28/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.28/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.28

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.27...v1.0.28

# 1.0.27

> Build environment: NodeJS `12.16.1`, NPM `6.14.3`

Changes:
* NPM package updates
* EPUB parser: added support for epub:type "roles" when handling links from TOC, landmarks, pagelist, etc.
* BCP47 language code "und" for unknown locale (metadata contributors/authors, (sub)title)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.27/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.27/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.27

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.26...v1.0.27

# 1.0.26

> Build environment: NodeJS `12.16.1`, NPM `6.13.7`

Changes:
* NPM package updates
* Fixed bug with decodeURIComponent for link.Href parsing (syntax normalization)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.26/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.26/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.26

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.25...v1.0.26

# 1.0.25

> Build environment: NodeJS `12.15.0`, NPM `6.13.7`

Changes:
* NPM package updates
* Minor Typescript fixes: typing for XPath Select, and removed rogue "any"
* Content transformers now pass "session info" semantic-agnostic data (serialized string) so that anonymous HTTP requests can be correlated with specific publications and with their reading session (multiple readers scenario). Also see changes in streamer, and of course navigator.
* Support for AudioBook parsing, local-packed (zipped), local-exploded (unzipped), and remote-exploded.

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.25/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.25/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.25

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.24...v1.0.25

# 1.0.24

> Build environment: NodeJS `12.13.0`, NPM `6.13.0`

Changes:
* NPM package updates
* TAJSON now parses/generates arbitrary JSON properties with typed object

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.24/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.24/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.24

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.23...v1.0.24

# 1.0.23

> Build environment: NodeJS `12.13.0`, NPM `6.12.0`

Changes:
* EPUB parser: improved support for percent-encoded URLs, with ZIP entry filename fallback on errors (edge case handling)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.23/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.23/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.23

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.22...v1.0.23

# 1.0.22

> Build environment: NodeJS `12.13.0`, NPM `6.12.0`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.22/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.22/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.22

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.21...v1.0.22

# 1.0.21

> Build environment: NodeJS `10.16.3`, NPM `6.12.0`

Changes:
* EPUB parser fix: title/etc. language map with full xml:lang support (local element and root OPF package)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.21/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.21/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.21

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.20...v1.0.21

# 1.0.20

> Build environment: NodeJS `10.16.3`, NPM `6.12.0`

Changes:
* EPUB parser fixes: added support for file-as/sort-as in Contributor, added language map support for Subject, added "_" default language fallback for object map that already has metadata refines.

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.20/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.20/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.20

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.19...v1.0.20

# 1.0.19

> Build environment: NodeJS `10.16.3`, NPM `6.12.0`

Changes:
* NPM updates (including NodeJS v12 for Electron v6)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.19/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.19/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.19

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.18...v1.0.19

# 1.0.18

> Build environment: NodeJS `10.16.3`, NPM `6.11.3`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.18/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.18/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.18

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.17...v1.0.18

# 1.0.17

> Build environment: NodeJS `10.16.3`, NPM `6.11.3`

Changes:
* NPM updates
* TypeScript sort imports

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.17/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.17/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.17

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.16...v1.0.17

# 1.0.16

> Build environment: NodeJS `10.16.3`, NPM `6.11.3`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.16/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.16/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.16

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.15...v1.0.16

# 1.0.15

> Build environment: NodeJS `10.16.0`, NPM `6.10.2`

Changes:
* support for publications without resources (but with valid spine items, navdoc, etc.)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.15/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.15/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.15

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.14...v1.0.15

# 1.0.14

> Build environment: NodeJS `10.16.0`, NPM `6.10.2`

Changes:
* NPM updates
* Buffer.from() API to remove deprecation messages

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.14/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.14/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.14

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.13...v1.0.14

# 1.0.13

> Build environment: NodeJS `10.16.0`, NPM `6.9.0`

Changes:
* NPM updates (notable: Ava unit tests)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.13/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.13/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.13

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.12...v1.0.13

# 1.0.12

> Build environment: NodeJS `10.15.3`, NPM `6.9.0`

Changes:
* When no `page-progression-direction` is specified on EPUB spine, check the `dc:language` to enforce RTL if necessary (matches `dir="rtl"` injection logic, which occurs on a per-document basis)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.12/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.12/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.12

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.11...v1.0.12

# 1.0.11

> Build environment: NodeJS `10.15.3`, NPM `6.9.0`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.11/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.11/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.11

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.10...v1.0.11

# 1.0.10

> Build environment: NodeJS `8.15.1`, NPM `6.4.1`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.10/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.10/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.10

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.9...v1.0.10

# 1.0.9

> Build environment: NodeJS `8.15.1`, NPM `6.4.1`

Changes:
* Added EPUB subtitle parsing
* Added string enums for publication metadata
* Support for iBooks and Kobo display-options EPUB metadata (META-INF XML)
* Support for Adobe page map
* Added Locator JSON-Schema references

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.9/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.9/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.9

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.8...v1.0.9

# 1.0.8

> Build environment: NodeJS `8.15.1`, NPM `6.4.1`

Changes:
* NPM updates
* JSON Schema reference updates
* NodeTS (TypeScript) unit test runner

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.8/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.8/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.8

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.7...v1.0.8

# 1.0.7

> Build environment: NodeJS `8.14.1`, NPM `6.4.1`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.7/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.7/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.7

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.6...v1.0.7

# 1.0.6

> Build environment: NodeJS `8.14.1`, NPM `6.4.1`

Changes:
* Reviewed and annotated the data models based on the most current JSON Schema
* Added fallback mechanism for (de)serialization to/from legacy (since renamed) JSON dictionary keys (e.g. `sort_as`, `belongs_to`, `direction`, `spine`)
* Minor NPM updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.6/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.6/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.6

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.5...v1.0.6

# 1.0.5

> Build environment: NodeJS `8.14.1`, NPM `6.4.1`

Changes:
* Updated documentation (minor)
* NPM 6.5.* has regression bugs for global package installs, so revert back to NPM 6.4.1 (which is officially shipped with the NodeJS installer).

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.5/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.5/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.5

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.4...v1.0.5

# 1.0.4

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.4/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.4/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.4

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.3...v1.0.4

# 1.0.3

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* NPM updates (r2-xxx-js)
* Support for remote HTTP exploded publications

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.3/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.3/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.3

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.2...v1.0.3

# 1.0.2

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* Fixed EPUB detection and adapted CLI + publication parser (matrix: local vs. remote, exploded vs. packed)
* NPM updates (minor)
* Replaced deprecated RawGit URLs
* Improved Ava unit test setup

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.2/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.2/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.2

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.1...v1.0.2

# 1.0.1

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* Chainable transforms for HTML now configurable via constructor (function pointer)
* Minor import aliases change

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.1/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.1/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.1

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.0...v1.0.1

# 1.0.0

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* EPUB - ReadiumWebPubManifest converter CLI (demo)
* Chainable transforms (content filters)
* Sample HTML transform (will evolve into ReadiumCSS injector for navigator)
* Locator model
* NPM updates (minor)
* README info
* VisualStudio code tweaks (developer workflow)
* Semantic versioning bump 1.*.* (3-digit style now, "-alphaX" suffix caused issues with NPM tooling: updates, lockfile, etc.)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.0/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.0/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.0

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.0-alpha.6...v1.0.0

# 1.0.0-alpha.6

> Build environment: NodeJS `8.12.0`, NPM `6.4.1`

Changes:
* NPM updates (minor)
* Git revision JSON info now includes NodeJS and NPM version (build environment)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.0-alpha.6/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.0-alpha.6/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.0-alpha.6

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.0-alpha.5...v1.0.0-alpha.6

# 1.0.0-alpha.5

Changes:
* Dependency "ta-json" GitHub semver dependency becomes "ta-json-x" NPM package (fixes https://github.com/readium/r2-testapp-js/issues/10 )
* Removed TypeScript linter warning message (checks for no unused variables)
* NPM updates related to the Node TypeScript typings

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.0-alpha.5/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.0-alpha.5/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.0-alpha.5

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.0-alpha.4...v1.0.0-alpha.5

# 1.0.0-alpha.4

Changes:
* NPM updates (external deps)

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.0-alpha.4/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.0-alpha.4/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.0-alpha.4

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.0-alpha.3...v1.0.0-alpha.4

# 1.0.0-alpha.3

Changes:
* correct version in `package-lock.json`

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.0-alpha.3/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.0-alpha.3/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.0-alpha.3

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.0-alpha.2...v1.0.0-alpha.3

# 1.0.0-alpha.2

Changes (NPM updates):
* `@types/node`
* `r2-utils-js`
* `r2-lcp-js`

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.0-alpha.2/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.0-alpha.2/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.0-alpha.2

Git diff:
* https://github.com/readium/r2-shared-js/compare/v1.0.0-alpha.1...v1.0.0-alpha.2

# 1.0.0-alpha.1

Changes:
* initial NPM publish

Git revision info:
* https://unpkg.com/r2-shared-js@1.0.0-alpha.1/dist/gitrev.json
* https://github.com/edrlab/r2-shared-js-dist/blob/v1.0.0-alpha.1/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-shared-js/commits/v1.0.0-alpha.1

Git diff:
* initial NPM publish
