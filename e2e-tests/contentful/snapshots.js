module.exports = {
  "__version": "6.9.1",
  "content-reference": {
    "content-reference-many-2nd-level-loop": {
      "1": "<div data-cy-id=\"content-reference-many-2nd-level-loop\">\n  <h2>Content Reference: Many (2nd level loop)</h2>\n  <p data-cy-id=\"integer\">[ContentfulInteger]\n    <!-- -->42</p>\n  <p data-cy-id=\"text\">[ContentfulText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p data-cy-id=\"reference\">[ContentfulReference]\n    <!-- -->Content Reference: One (Loop A -&gt; B)\n    <!-- -->: [\n    <!-- -->Content Reference: One (Loop B -&gt; A)\n    <!-- -->]</p>\n</div>"
    },
    "content-reference-many-loop-a-greater-b": {
      "1": "<div data-cy-id=\"content-reference-many-loop-a-greater-b\">\n  <h2>Content Reference: Many (Loop A -&gt; B)</h2>\n  <p data-cy-id=\"integer\">[ContentfulInteger]\n    <!-- -->42</p>\n  <p data-cy-id=\"text\">[ContentfulText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p data-cy-id=\"reference\">[ContentfulReference]\n    <!-- -->Content Reference: Many (Loop B -&gt; A)\n    <!-- -->: [\n    <!-- -->Number: Integer, Text: Short, Content Reference: Many (Loop A -&gt;\n    B)\n    <!-- -->]</p>\n</div>"
    },
    "content-reference-many-loop-b-greater-a": {
      "1": "<div data-cy-id=\"content-reference-many-loop-b-greater-a\">\n  <h2>Content Reference: Many (Loop B -&gt; A)</h2>\n  <p data-cy-id=\"integer\">[ContentfulInteger]\n    <!-- -->42</p>\n  <p data-cy-id=\"text\">[ContentfulText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p data-cy-id=\"reference\">[ContentfulReference]\n    <!-- -->Content Reference: Many (Loop A -&gt; B)\n    <!-- -->: [\n    <!-- -->Number: Integer, Text: Short, Content Reference: Many (Loop B -&gt;\n    A)\n    <!-- -->]</p>\n</div>"
    },
    "content-reference-many-self-reference": {
      "1": "<div data-cy-id=\"content-reference-many-self-reference\">\n  <h2>Content Reference: Many (Self Reference)</h2>\n  <p data-cy-id=\"integer\">[ContentfulInteger]\n    <!-- -->42</p>\n  <p data-cy-id=\"text\">[ContentfulText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p data-cy-id=\"reference\">[ContentfulReference]\n    <!-- -->Content Reference: Many (Self Reference)\n    <!-- -->: [\n    <!-- -->Number: Integer, Text: Short, Content Reference: Many (Self\n    Reference)\n    <!-- -->]</p>\n</div>"
    },
    "content-reference-one": {
      "1": "<div data-cy-id=\"content-reference-one\">\n  <h2>Content Reference: One</h2>\n  <p data-cy-id=\"text\">[ContentfulText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n</div>"
    },
    "content-reference-one-loop-a-greater-b": {
      "1": "<div data-cy-id=\"content-reference-one-loop-a-greater-b\">\n  <h2>Content Reference: One (Loop A -&gt; B)</h2>\n  <p data-cy-id=\"reference\">[ContentfulReference]\n    <!-- -->Content Reference: One (Loop B -&gt; A)\n    <!-- -->: [\n    <!-- -->Content Reference: One (Loop A -&gt; B)\n    <!-- -->]</p>\n</div>"
    },
    "content-reference-one-loop-b-greater-a": {
      "1": "<div data-cy-id=\"content-reference-one-loop-b-greater-a\">\n  <h2>Content Reference: One (Loop B -&gt; A)</h2>\n  <p data-cy-id=\"reference\">[ContentfulReference]\n    <!-- -->Content Reference: One (Loop A -&gt; B)\n    <!-- -->: [\n    <!-- -->Content Reference: One (Loop B -&gt; A)\n    <!-- -->]</p>\n</div>"
    },
    "content-reference-one-self-reference": {
      "1": "<div data-cy-id=\"content-reference-one-self-reference\">\n  <h2>Content Reference: One (Self Reference)</h2>\n  <p data-cy-id=\"reference\">[ContentfulReference]\n    <!-- -->Content Reference: One (Self Reference)\n    <!-- -->: [\n    <!-- -->Content Reference: One (Self Reference)\n    <!-- -->]</p>\n</div>"
    }
  },
  "rich-text": {
    "rich-text: All Features": {
      "1": "<div data-cy-id=\"rich-text-all-features\">\n  <h2>Rich Text: All Features</h2>\n  <h1>The <a href=\"https://contentful.com/\">European</a> languages</h1>\n  <p>are members of the same family. Their <u>separate</u> <strong\n      data-cy-strong=\"true\">existence</strong> is a <i>myth</i>. For:</p>\n  <ul>\n    <li>\n      <p>science</p>\n    </li>\n    <li>\n      <p>music</p>\n    </li>\n    <li>\n      <p>sport</p>\n    </li>\n    <li>\n      <p>etc</p>\n    </li>\n  </ul>\n  <p>Europe uses the same vocabulary.</p>\n  <div class=\" gatsby-image-wrapper\"\n    style=\"position:relative;overflow:hidden;width:200px\">\n    <div aria-hidden=\"true\"\n      style=\"width:100%;padding-bottom:150%\"></div><img aria-hidden=\"true\"\n      src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gIcSUNDX1BST0ZJTEUAAQEAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD////bAEMACQYGCAYFCQgHCAoJCQoNFg4NDAwNGhMUEBYfHCEgHxweHiMnMiojJS8lHh4rOywvMzU4ODghKj1BPDZBMjc4Nf/bAEMBCQoKDQsNGQ4OGTUkHiQ1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1Nf/AABEIAB4AFAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAAAwUGB//EAC0QAAIBAwMABgsAAAAAAAAAAAECAwAEEQUSIQYTIjFRYRQWMjNBQnGxstHw/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgQAAf/EABoRAAMBAAMAAAAAAAAAAAAAAAABERITMUH/2gAMAwEAAhEDEQA/ALvrGYUEYjwTtUl224JOB/eYp0msQag1xpbszSI+JQDkLgjjPjUDQdVn6+G2uLgEKpWKUEEq2ODyOaVa3Mll0kjjvrh7udg0Kydkce0AcfQ1NtdUqx7DpUesxW8KRPkMq44+PnRWMu9UzcNn86Ke2DjQvovoby2N9ddWomSMrEso+bv/AFUTX7qWPXLOSL0fqUL+7UYB3bTkeOMc1tob1re3KjuPfiuea+ubifYdpDMw486GUoKtlG8kgWfBAzjnsiip6yLcxpK27LKPtRWh2n//2Q==\"\n      alt=\"\"\n      style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 0; transition-delay: 500ms;\">\n    <picture>\n      <source\n        srcset=\"//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=50&amp;h=75&amp;q=50 50w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=100&amp;h=150&amp;q=50 100w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&amp;h=300&amp;q=50 200w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=300&amp;h=450&amp;q=50 300w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=400&amp;h=600&amp;q=50 400w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=600&amp;h=900&amp;q=50 600w\"\n        sizes=\"(max-width: 200px) 100vw, 200px\"><img\n        sizes=\"(max-width: 200px) 100vw, 200px\"\n        srcset=\"//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=50&amp;h=75&amp;q=50 50w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=100&amp;h=150&amp;q=50 100w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&amp;h=300&amp;q=50 200w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=300&amp;h=450&amp;q=50 300w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=400&amp;h=600&amp;q=50 400w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=600&amp;h=900&amp;q=50 600w\"\n        src=\"//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&amp;q=50\"\n        alt=\"\"\n        loading=\"lazy\"\n        style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;\">\n    </picture><noscript>\n      <picture>\n        <source\n          srcset=\"//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=50&h=75&q=50 50w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=100&h=150&q=50 100w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&h=300&q=50 200w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=300&h=450&q=50 300w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=400&h=600&q=50 400w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=600&h=900&q=50 600w\"\n          sizes=\"(max-width: 200px) 100vw, 200px\" /><img loading=\"lazy\"\n          sizes=\"(max-width: 200px) 100vw, 200px\"\n          srcset=\"//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=50&h=75&q=50 50w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=100&h=150&q=50 100w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&h=300&q=50 200w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=300&h=450&q=50 300w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=400&h=600&q=50 400w,\n//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=600&h=900&q=50 600w\"\n          src=\"//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg?w=200&q=50\"\n          alt=\"\"\n          style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\" />\n      </picture>\n    </noscript>\n  </div>\n  <p></p>\n  <hr>\n  <p>The languages only differ in:</p>\n  <ol>\n    <li>\n      <p>their grammar</p>\n    </li>\n    <li>\n      <p>their pronunciation</p>\n    </li>\n    <li>\n      <p>their most common words</p>\n    </li>\n    <li>\n      <p><span data-cy-id=\"inline-text\">[Inline-ContentfulText]\n          <!-- -->Text: Short\n          <!-- -->:\n          <!-- -->The quick brown fox jumps over the lazy dog.</span></p>\n    </li>\n  </ol>\n  <p>Everyone realizes why a new common language would be desirable: one could\n    refuse to pay expensive translators.</p>\n  <p><code>{\n      \"userId\": 1,\n      \"id\": 1,\n      \"title\": \"delectus aut autem\",\n      \"completed\": false\n      }</code></p>\n  <p>To achieve this, it would be necessary to have uniform grammar,\n    pronunciation and more common words.</p>\n  <p data-cy-id=\"location\">[ContentfulLocation] Lat:\n    <!-- -->52.51627\n    <!-- -->, Long:\n    <!-- -->13.3777</p>\n  <blockquote>\n    <p>If several languages coalesce, the grammar of the resulting language is\n      more simple and regular than that of the individual languages.</p>\n  </blockquote>\n  <p>The new common language will be more simple and regular than the existing\n    European languages. It will be as simple as Occidental; in fact, it will be\n  </p>\n  <hr>\n</div>"
    },
    "rich-text: Basic": {
      "1": "<div data-cy-id=\"rich-text-basic\">\n  <h2>Rich Text: Basic</h2>\n  <h1>The <a href=\"https://contentful.com/\">European</a> languages</h1>\n  <p>are members of the same family. Their <u>separate</u> <strong\n      data-cy-strong=\"true\">existence</strong> is a <i>myth</i>. For:</p>\n  <ul>\n    <li>\n      <p>science</p>\n    </li>\n    <li>\n      <p>music</p>\n    </li>\n    <li>\n      <p>sport</p>\n    </li>\n    <li>\n      <p>etc</p>\n    </li>\n  </ul>\n  <p>Europe uses the same vocabulary.</p>\n  <hr>\n  <p>The languages only differ in:</p>\n  <ol>\n    <li>\n      <p>their grammar</p>\n    </li>\n    <li>\n      <p>their pronunciation</p>\n    </li>\n    <li>\n      <p>their most common words</p>\n    </li>\n  </ol>\n  <p>Everyone realizes why a new common language would be desirable: one could\n    refuse to pay expensive translators.</p>\n  <p><code>{\n      \"userId\": 1,\n      \"id\": 1,\n      \"title\": \"delectus aut autem\",\n      \"completed\": false\n      }</code></p>\n  <p>To achieve this, it would be necessary to have uniform grammar,\n    pronunciation and more common words.</p>\n  <blockquote>\n    <p>If several languages coalesce, the grammar of the resulting language is\n      more simple and regular than that of the individual languages.</p>\n  </blockquote>\n  <p>The new common language will be more simple and regular than the existing\n    European languages. It will be as simple as Occidental; in fact, it will be\n  </p>\n  <hr>\n</div>"
    },
    "rich-text: Embedded Entry": {
      "1": "<div data-cy-id=\"rich-text-embedded-entry\">\n  <h2>Rich Text: Embedded Entry</h2>\n  <h1>Embedded Entry</h1>\n  <p data-cy-id=\"text\">[ContentfulText]\n    <!-- -->The quick brown fox jumps over the lazy dog.</p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>"
    },
    "rich-text: Embedded Asset": {
      "1": "<div data-cy-id=\"rich-text-embedded-asset\">\n  <h2>Rich Text: Embedded asset</h2>\n  <h1>Embedded Asset</h1>\n  <div class=\" gatsby-image-wrapper\"\n    style=\"position:relative;overflow:hidden;width:200px\">\n    <div aria-hidden=\"true\"\n      style=\"width:100%;padding-bottom:66.67279749862055%\"></div><img\n      aria-hidden=\"true\"\n      src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gIcSUNDX1BST0ZJTEUAAQEAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD////bAEMACQYGCAYFCQgHCAoJCQoNFg4NDAwNGhMUEBYfHCEgHxweHiMnMiojJS8lHh4rOywvMzU4ODghKj1BPDZBMjc4Nf/bAEMBCQoKDQsNGQ4OGTUkHiQ1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1Nf/AABEIAA0AFAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAABQIGB//EACcQAAEDAgQFBQAAAAAAAAAAAAECAwQAEQUSMWEGISNBcRNRUqHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQISIf/aAAwDAQACEQMRAD8A1RTiWm1uKNgkXJ2FJuH8ckYtKfaUGy3GASt0JPUJGo++3j3qAxGU2FK9QKzHQpHLxSrgiZJKJ5ddDnVsLp0HPfepuWoqo4y2PvttuWUoA270Unny5QkDK4gDL8L/ALRSsCp//9k=\"\n      alt=\"\"\n      style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 0; transition-delay: 500ms;\">\n    <picture>\n      <source\n        srcset=\"//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=50&amp;h=33&amp;q=50 50w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=100&amp;h=67&amp;q=50 100w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&amp;h=133&amp;q=50 200w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=300&amp;h=200&amp;q=50 300w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=400&amp;h=267&amp;q=50 400w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=600&amp;h=400&amp;q=50 600w\"\n        sizes=\"(max-width: 200px) 100vw, 200px\"><img\n        sizes=\"(max-width: 200px) 100vw, 200px\"\n        srcset=\"//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=50&amp;h=33&amp;q=50 50w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=100&amp;h=67&amp;q=50 100w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&amp;h=133&amp;q=50 200w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=300&amp;h=200&amp;q=50 300w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=400&amp;h=267&amp;q=50 400w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=600&amp;h=400&amp;q=50 600w\"\n        src=\"//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&amp;q=50\"\n        alt=\"\"\n        loading=\"lazy\"\n        style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;\">\n    </picture><noscript>\n      <picture>\n        <source\n          srcset=\"//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=50&h=33&q=50 50w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=100&h=67&q=50 100w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&h=133&q=50 200w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=300&h=200&q=50 300w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=400&h=267&q=50 400w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=600&h=400&q=50 600w\"\n          sizes=\"(max-width: 200px) 100vw, 200px\" /><img loading=\"lazy\"\n          sizes=\"(max-width: 200px) 100vw, 200px\"\n          srcset=\"//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=50&h=33&q=50 50w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=100&h=67&q=50 100w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&h=133&q=50 200w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=300&h=200&q=50 300w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=400&h=267&q=50 400w,\n//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=600&h=400&q=50 600w\"\n          src=\"//images.ctfassets.net/k8iqpp6u0ior/3BSI9CgDdAn1JchXmY5IJi/f97a2185b3395591b98008647ad6fd3c/camylla-battani-AoqgGAqrLpU-unsplash.jpg?w=200&q=50\"\n          alt=\"\"\n          style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\" />\n      </picture>\n    </noscript>\n  </div>\n  <p></p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>"
    },
    "rich-text: Embedded Entry With Deep Reference Loop": {
      "1": "<div data-cy-id=\"rich-text-embedded-entry-with-deep-reference-loop\">\n  <h2>Rich Text: Embedded entry with deep reference loop</h2>\n  <h1>Embedded entry with deep reference loop</h1>\n  <p data-cy-id=\"reference\">[ContentfulReference]\n    <!-- -->Content Reference: Many (2nd level loop)\n    <!-- -->: [\n    <!-- -->Number: Integer, Text: Short, Content Reference: One (Loop A -&gt;\n    B)\n    <!-- -->]</p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>"
    },
    "rich-text: Embedded Entry With Reference Loop": {
      "1": "<div data-cy-id=\"rich-text-embedded-entry-with-reference-loop\">\n  <h2>Rich Text: Embedded entry with reference loop</h2>\n  <h1>Embedded entry with reference loop</h1>\n  <p data-cy-id=\"reference\">[ContentfulReference]\n    <!-- -->Content Reference: One (Loop B -&gt; A)\n    <!-- -->: [\n    <!-- -->Content Reference: One (Loop A -&gt; B)\n    <!-- -->]</p>\n  <p></p>\n  <hr>\n</div>"
    },
    "rich-text: Inline Entry": {
      "1": "<div data-cy-id=\"rich-text-inline-entry\">\n  <h2>Rich Text: Inline entry</h2>\n  <h1>Inline entry with reference loop</h1>\n  <p>Should be rendered after this <span\n      data-cy-id=\"inline-text\">[Inline-ContentfulText]\n      <!-- -->Text: Short\n      <!-- -->:\n      <!-- -->The quick brown fox jumps over the lazy dog.</span> and before\n    that</p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>"
    },
    "rich-text: Inline Entry With Deep Reference Loop": {
      "1": "<div data-cy-id=\"rich-text-inline-entry-with-deep-reference-loop\">\n  <h2>Rich Text: Inline entry with deep reference loop</h2>\n  <h1>Inline entry with deep reference loop</h1>\n  <p>Should be rendered after this <span>[Inline-\n      <!-- -->ContentfulContentReference\n      <!-- -->]\n      <!-- -->Content Reference: Many (2nd level loop)</span> and before that\n  </p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>"
    },
    "rich-text: Inline Entry With Reference Loop": {
      "1": "<div data-cy-id=\"rich-text-inline-entry-with-reference-loop\">\n  <h2>Rich Text: Inline entry with reference loop</h2>\n  <h1>Inline entry with reference loop</h1>\n  <p>Should be rendered after this <span>[Inline-\n      <!-- -->ContentfulContentReference\n      <!-- -->]\n      <!-- -->Content Reference: One (Loop A -&gt; B)</span> and before that</p>\n  <p></p>\n  <p></p>\n  <hr>\n</div>"
    }
  },
  "text": {
    "text: Short List": {
      "1": "<div data-cy-id=\"short-list\">\n  <ul>\n    <li data-cy-value=\"true\">The quick brown fox</li>\n    <li data-cy-value=\"true\">jumps over the lazy dog</li>\n  </ul>\n</div>"
    },
    "text: Long Markdown Simple": {
      "1": "<div data-cy-id=\"long-markdown-simple\">\n  <h1>Headline</h1>\n  <p>The <strong>European languages</strong> are members of the same family.\n    Their separate existence is a myth. For:</p>\n  <ul>\n    <li>science</li>\n    <li>music</li>\n    <li>sport</li>\n    <li>etc</li>\n  </ul>\n  <p>Europe uses the same vocabulary.</p>\n  <blockquote>\n    <p>The languages only differ in their grammar, their pronunciation and their\n      most common words. Everyone realizes why a new common language would be\n      desirable: one could refuse to pay expensive translators.</p>\n  </blockquote>\n  <p>To achieve this, it would be necessary to have uniform grammar,\n    pronunciation and more common words. If several languages coalesce, the\n    grammar of the resulting language is more simple and regular than that of\n    the individual languages. The new common language will be more simple and\n    regular than the existing European languages. It will be as simple as\n    Occidental; in fact, it will be.</p>\n</div>"
    },
    "text: Long Markdown Complex": {
      "1": "<div data-cy-id=\"long-markdown-complex\">\n  <h1><a href=\"https://www.gatsbyjs.com/\">Headline Complex</a></h1>\n  <p>The <em>European languages</em> are members of the same family. Their\n    separate existence is a myth. For:</p>\n  <ul>\n    <li>science</li>\n    <li>music</li>\n    <li>sport</li>\n    <li>etc</li>\n  </ul>\n  <p>Europe uses the same <kbd>vocabulary</kbd>.</p>\n  <blockquote>\n    <p>The languages only differ in their grammar, their pronunciation and their\n      most common words. Everyone realizes why a new common language would be\n      desirable: one could refuse to pay expensive translators.</p>\n  </blockquote>\n  <p><img\n      src=\"//images.ctfassets.net/k8iqpp6u0ior/2PeXF5HW2hiDfCggU9RIpO/8236da1f40af17e19922ddb87030735a/jae-park-7GX5aICb5i4-unsplash.jpg\"\n      alt=\"Example Cat\"></p>\n  <p>To achieve this, it would be necessary to have uniform grammar,\n    pronunciation and more common words. If several languages coalesce, the\n    grammar of the resulting language is more simple and regular than that of\n    the individual languages. The new common language will be more simple and\n    regular than the existing European languages. It will be as simple as\n    Occidental; in fact, it will be.</p>\n  <pre><code class=\"language-json\">{\n\t\"userId\": 1,\n\t\"id\": 1,\n\t\"title\": \"delectus aut autem\",\n\t\"completed\": false\n}\n</code></pre>\n</div>"
    }
  },
  "json": {
    "json: Complex": {
      "1": "<div style=\"border:1px dashed grey;padding:0 1rem;margin:1rem 0\">\n  <p data-cy-value-name=\"true\">Name:\n    <!-- -->Tom Cruise</p>\n  <p data-cy-value-photo=\"true\">Photo:\n    <!-- -->https://jsonformatter.org/img/tom-cruise.jpg</p>\n  <p data-cy-value-birthdate=\"true\">Birthdate:\n    <!-- -->1962-7-3T00:12:34.000Z</p>\n  <p data-cy-value-born-at=\"true\">Born at:\n    <!-- -->Syracuse, NY</p>\n  <p data-cy-value-weight=\"true\">Weight:\n    <!-- -->67.5</p>\n  <p data-cy-value-age=\"true\">Age:\n    <!-- -->56</p>\n  <p data-cy-value-wife=\"true\">Wife: </p>\n  <p data-cy-value-children=\"true\">Children:\n    <!-- -->Suri, Isabella Jane, Connor</p>\n  <p data-cy-value-has-children=\"true\">Has children:\n    <!-- -->true</p>\n  <p data-cy-value-has-grey-hair=\"true\">Has grey hair:\n    <!-- -->false</p>\n</div>",
      "2": "<div style=\"border:1px dashed grey;padding:0 1rem;margin:1rem 0\">\n  <p data-cy-value-name=\"true\">Name:\n    <!-- -->Robert Downey Jr.</p>\n  <p data-cy-value-photo=\"true\">Photo:\n    <!-- -->https://jsonformatter.org/img/Robert-Downey-Jr.jpg</p>\n  <p data-cy-value-birthdate=\"true\">Birthdate:\n    <!-- -->1965-4-4T00:12:34.000Z</p>\n  <p data-cy-value-born-at=\"true\">Born at:\n    <!-- -->New York City, NY</p>\n  <p data-cy-value-weight=\"true\">Weight:\n    <!-- -->77.1</p>\n  <p data-cy-value-age=\"true\">Age:\n    <!-- -->53</p>\n  <p data-cy-value-wife=\"true\">Wife:\n    <!-- -->Susan Downey</p>\n  <p data-cy-value-children=\"true\">Children:\n    <!-- -->Indio Falconer, Avri Roel, Exton Elias</p>\n  <p data-cy-value-has-children=\"true\">Has children:\n    <!-- -->true</p>\n  <p data-cy-value-has-grey-hair=\"true\">Has grey hair:\n    <!-- -->false</p>\n</div>"
    }
  }
}
