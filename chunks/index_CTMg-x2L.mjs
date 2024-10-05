import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_ChepxZBk.mjs';
import { g as getImage } from './_astro_assets_BWHvcvEw.mjs';
import Astro__1FGcQl from './02_4pxPr5cW.mjs';
import Astro__1FKh32 from './03_Dqrq5l8x.mjs';
import Astro__1FOleI from './04_Bfwl6uTo.mjs';
import Astro__1FSpqp from './05_kcQHxnmQ.mjs';
import Astro__1FWtC6 from './06_Bmx4ap4_.mjs';
import Astro__1G1xNM from './07_DNcOdhPW.mjs';
import Astro__1G5C0t from './08_BK_ak6EI.mjs';
import Astro__1G9Gca from './09_B1pzYDyY.mjs';
import Astro__1HCcpj from './10_VZSR-LxE.mjs';

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "02\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "02.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1FGcQl, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "03\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "03.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1FKh32, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "04\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "04.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1FOleI, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "05\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "05.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1FSpqp, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "06\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "06.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1FWtC6, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "07\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "07.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1G1xNM, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "08\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "08.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1G5C0t, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "09\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "09.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1G9Gca, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "10\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "10.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1HCcpj, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h1 id=\"studying-simple-pooled-storage-and-striped-sets\">Studying Simple Pooled Storage and Striped Sets<a class=\"anchor\" href=\"#studying-simple-pooled-storage-and-striped-sets\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h1>\n<p>Before we get started I want to acknowledge the obvious. Striping drives is not for everyone. Unless you are confident in your local and offsite backup solutions I do not recommend playing with your data in this way.</p>\n<p>This is an examination of the built in Windows 10 striping solutions. I am looking at 2 basic questions.</p>\n<ul>\n<li><em>Are they actually faster than a normal disk configuration?</em></li>\n<li><em>Which one should you choose?</em></li>\n</ul>\n<p>For the uninitiated I’ve provided a brief summary of logical and physical storage along with an idea of how striping works.</p>\n<hr>\n<h3 id=\"an-introduction-to-storage\">An introduction to storage<a class=\"anchor\" href=\"#an-introduction-to-storage\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>Storage solutions are an overlooked aspect of building computers. Computer enthusiasts often have multiple drives and even multiple types of drives in their computer. The most simple way to set these up is to use each physical drive as a discrete logical drive. That is, each drive <em>physically</em> in your computer corresponds to a drive <em>logically</em> mounted in your operating system.</p>\n<p>Here a common enthusiast setup:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>Logical           Physical</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>500GB - Boot drive (C://)              &#x3C;== 500GB SSD A</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>1TB - Movies and TV Shows drive (D://) &#x3C;== 1TB HHD A</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Here we have two physical drives and two logical drives.</p>\n<p>However, it is possible to combine multiple physical drives into a single logical drive. Here is a example of a logical drive arrangement called a <em>Striped Set</em>:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>Logical           Physical</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>500GB - Boot drive (C://)              &#x3C;== 500GB SSD A</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>1TB - Movies and TV Shows drive (D://) &#x3C;== 500GB HHD B + 500GB HHD C</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>There are two main reasons to play with logical drive configurations, speed <em>or</em> resiliency. I want to emphasis the “or” of that statement. In most cases you will be choosing between the two.</p>\n<p>The most common versions of these are <em>Striped Drive Sets</em> (speed) and <em>Mirrored Drive Sets</em> (resiliency). You may also have heard these referred to as RAID 0 and RAID 1 respectively.</p>\n<p>We are going to focus primarily on <em>Striped Drive Sets</em>.</p>\n<h3 id=\"what-are-striped-sets\">What are striped sets?<a class=\"anchor\" href=\"#what-are-striped-sets\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>Here is the most basic and unhelpful definition of a striped drive set:</p>\n<blockquote>\n<p>A set of drives that have data striped across them.</p>\n</blockquote>\n<p>But what is striped data? Wikipedia has a great definition.</p>\n<blockquote>\n<p>Data Striping is the technique of segmenting logically sequential data, such as a file, so that consecutive segments are stored on different physical storage devices.</p>\n</blockquote>\n<blockquote>\n<p>Striping is useful when a processing device requests data more quickly than a single storage device can provide it. By spreading segments across multiple devices which can be accessed concurrently, total data throughput is increased.</p>\n</blockquote>\n<p>Basically, the computer can read and write your files quicker when talking to two drives than it can talking to one.</p>\n<h3 id=\"why-you-shouldnt-do-this\">Why <strong>you shouldn’t do this</strong><a class=\"anchor\" href=\"#why-you-shouldnt-do-this\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>I want to take a moment and recognize the biggest pitfall of this method of drive management. If <em>any</em> drive in your striped set fails, you <em>will</em> lose <em>all</em> of the data across <em>all</em> of your striped drives. It is very difficult to recover files lost to a failed striped set.</p>\n<p>Only do this if you are okay with losing your files on your striped set or you have a backup solution.</p>\n<h3 id=\"so-what-is-this-post-actually-about\">So what is this post actually about?<a class=\"anchor\" href=\"#so-what-is-this-post-actually-about\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>The easiest way to logically configure drives in Windows 10 is to use one of two built in tools. Disk Management and Storage Spaces. Almost all online discussion about these tools revolves around the mirroring and parity aspects. Since I couldn’t find a great breakdown of how these tools differ in striped set performance and I happen to have my computer taken a part right now, I decided to make my own.</p>\n<p>I’ll just be using a couple of the drives I own. My results are not necessarily reflective of how these tools work universally, but I believe some data is better than none.</p>\n<p>These are the drives I’ll be testing:</p>\n<ul>\n<li>Hitachi GST Travelstar 7K500 HTS725050A9A364–2.5” 7200 RPM — 2 of them</li>\n<li>Seagate Momentus ST9750420AS — 2.5” 7200 RPM</li>\n<li>WD Red WD20EFRX — 3.5” 5400 RPM</li>\n<li>Seagate BarraCuda ST2000DM006–3.5” 7200 RPM — 2 of them</li>\n<li>Crucial M500 CT240M500SSD1–2.5” SSD</li>\n</ul>\n<p>This is a complete hodgepodge of drives dating back all the way to 2010.</p>\n<blockquote>\n<p>A quick note: I ended up breaking one of my Hitachi drives while testing due to rough handling while it was powered on. (not my proudest moment) This is why I don’t have complete results from that array.</p>\n</blockquote>\n<h3 id=\"the-methodology\">The Methodology<a class=\"anchor\" href=\"#the-methodology\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>I used a couple of tests to measure drive performance.</p>\n<p>For synthetic, I used CrystalDiskmark 6.0 with a 32Gib test size as my standard benchmark. It is my understanding that this is the most accurate method of benchmarking within CrystalDiskmark.</p>\n<p>I also tested a single large file transfer of 19.7 GB as well as a folder containing 201 files of varying size up to 10gb.</p>\n<p>All drives were freshly formatted to NTFS prior to testing.</p>\n<h3 id=\"on-to-the-testing\">On to the testing<a class=\"anchor\" href=\"#on-to-the-testing\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<h3 id=\"individual-drives\">Individual Drives<a class=\"anchor\" href=\"#individual-drives\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>First the synthetic test. Keep in mind this graph is on a logarithmic scale, look at the values rather than the length of the lines. Higher is better.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;02.png&#x22;,&#x22;alt&#x22;:&#x22;Synthetic Benchmark: Higher is better.&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Next, my own real life benchmarks. In this case, smaller is better.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;03.png&#x22;,&#x22;alt&#x22;:&#x22;Real life benchmarks&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Basically all of the drives perform exactly as you would expect. I am pleased to see my new Barracuda drives perform better than the Hitachi drives I am replacing. Nothing really to learn here but it will be useful as a comparison for our future tests.</p>\n<h3 id=\"drive-pairs\">Drive Pairs<a class=\"anchor\" href=\"#drive-pairs\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>Next up, the Hitachi and Barracuda drive sets in both Striped Set and Simple Pool. This gives us the most general idea of how these tools differ. Once again, mind the logarithmic scale.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;04.png&#x22;,&#x22;alt&#x22;:&#x22;Synthetic Benchmark: Higher is better.&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>The striped sets consistently outperform the simple pooled storage. Nearly doubling the speed of the Seq Q32T1 Write in both instances. Interestingly while the striped set provides a significant performance benefit, the pooled storage seems to offer little benefit compared to the individual drives.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;05.png&#x22;,&#x22;alt&#x22;:&#x22;Real Life Benchmark: Lower is better.&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>The real life benchmark confirm my findings, however the results are not as extreme.</p>\n<h3 id=\"getting-wild-with-pooled-storage\">Getting wild with Pooled Storage<a class=\"anchor\" href=\"#getting-wild-with-pooled-storage\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<h3 id=\"drive-pairs-with-ssd\">Drive Pairs with SSD<a class=\"anchor\" href=\"#drive-pairs-with-ssd\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>I was interested in seeing how adding an ssd to a pair of identical drives affect performance.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;06.png&#x22;,&#x22;alt&#x22;:&#x22;Synthetic Benchmark: Higher is better.&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;07.png&#x22;,&#x22;alt&#x22;:&#x22;Real Life Benchmark: Lower is better.&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>A small but consistent improvement.</p>\n<h3 id=\"other-pooled-arrangements\">Other Pooled Arrangements<a class=\"anchor\" href=\"#other-pooled-arrangements\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>I was also interested in how other drive arrangements affected pooled speed.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;08.png&#x22;,&#x22;alt&#x22;:&#x22;Synthetic Benchmark: Higher is better.&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;09.png&#x22;,&#x22;alt&#x22;:&#x22;Real Life Benchmark: Lower is better.&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"conclusions\">Conclusions<a class=\"anchor\" href=\"#conclusions\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2>\n<p>Lets take a look at my initial questions and see if we can draw some conclusions.</p>\n<ul>\n<li><em>Are they actually faster than a normal disk configuration?</em></li>\n<li><em>Which one should you choose?</em></li>\n</ul>\n<h3 id=\"are-they-actually-faster-than-a-normal-disk-configuration\">Are they actually faster than a normal disk configuration?<a class=\"anchor\" href=\"#are-they-actually-faster-than-a-normal-disk-configuration\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>Short answer, yes, probably. How much is heavily dependent of type of load and disk configuration.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;10.png&#x22;,&#x22;alt&#x22;:&#x22;Performance comparison&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Striping the disks provided about a 90ish% performance benefit all around.</p>\n<p>Pooled storage with identical disks seems to slightly hinder sequential performance but it does provide some benefit for random reads and writes. Not quite as much as striping though.</p>\n<p>I find it very interesting how adding in an SSD to the pool doesn’t affect sequential speeds much but has a tremendous increase on random speeds.</p>\n<h3 id=\"which-one-should-you-choose\">Which one should you choose?<a class=\"anchor\" href=\"#which-one-should-you-choose\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3>\n<p>Based on my results, If you have an identical disk set, you should stripe. The striped set performance was consistently better than the pooled set.</p>\n<p>If you are combining different drives, even if they are the same capacity, it may be worth looking into pooled storage.</p>\n<h2 id=\"wrapping-up-with-a-few-notes\">Wrapping up with a few notes<a class=\"anchor\" href=\"#wrapping-up-with-a-few-notes\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2>\n<p>I hope you found my collection of benchmarks interesting and possibly useful. I know this collection of graphs is not the easiest way to ingest the data so I have provided a link to my data in a <a href=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vT3i65ZzbC6_87ep98EPcwiNoEVu-Q4-V46XL5jksELZTkQJg8AoI1Y3vd5N2zax_SKDvLMtCQ3Qs_I/pubhtml?gid=0&#x26;single=true\">spreadsheet here</a>.</p>\n<p>Thanks for reading.</p>");
	

				const frontmatter = {"title":"Studying Simple Pooled Storage and Striped Sets","published":"2021-08-04T00:00:00.000Z","description":"Windows 10 disk striping explored with real-world benchmarks.","image":"./01.jpg","tags":["hardware","raid","storage"],"category":"Indexed","draft":false,"language":"","minutes":6,"words":1226,"excerpt":"Before we get started I want to acknowledge the obvious. Striping drives is not for everyone. Unless you are confident in your local and offsite backup solutions I do not recommend playing with your data in this way."};
				const file = "/home/alex/dev/playground/blog/blog/src/content/posts/Studying Simple Pooled Storage and Striped Sets/index.md";
				const url = undefined;
				function rawContent() {
					return "# Studying Simple Pooled Storage and Striped Sets\n\nBefore we get started I want to acknowledge the obvious. Striping drives is not for everyone. Unless you are confident in your local and offsite backup solutions I do not recommend playing with your data in this way.\n\nThis is an examination of the built in Windows 10 striping solutions. I am looking at 2 basic questions.\n\n- *Are they actually faster than a normal disk configuration?*\n- *Which one should you choose?*\n\nFor the uninitiated I've provided a brief summary of logical and physical storage along with an idea of how striping works.\n\n---\n\n### An introduction to storage\n\nStorage solutions are an overlooked aspect of building computers. Computer enthusiasts often have multiple drives and even multiple types of drives in their computer. The most simple way to set these up is to use each physical drive as a discrete logical drive. That is, each drive *physically* in your computer corresponds to a drive *logically* mounted in your operating system.\n\nHere a common enthusiast setup:\n\n```\nLogical           Physical\n\n500GB - Boot drive (C://)              <== 500GB SSD A\n\n1TB - Movies and TV Shows drive (D://) <== 1TB HHD A\n```\n\nHere we have two physical drives and two logical drives.\n\nHowever, it is possible to combine multiple physical drives into a single logical drive. Here is a example of a logical drive arrangement called a *Striped Set*:\n\n```\nLogical           Physical\n\n500GB - Boot drive (C://)              <== 500GB SSD A\n\n1TB - Movies and TV Shows drive (D://) <== 500GB HHD B + 500GB HHD C\n```\n\nThere are two main reasons to play with logical drive configurations, speed *or* resiliency. I want to emphasis the \"or\" of that statement. In most cases you will be choosing between the two.\n\nThe most common versions of these are *Striped Drive Sets* (speed) and *Mirrored Drive Sets* (resiliency). You may also have heard these referred to as RAID 0 and RAID 1 respectively.\n\nWe are going to focus primarily on *Striped Drive Sets*.\n\n### What are striped sets?\n\nHere is the most basic and unhelpful definition of a striped drive set:\n\n> A set of drives that have data striped across them.\n\nBut what is striped data? Wikipedia has a great definition.\n\n> Data Striping is the technique of segmenting logically sequential data, such as a file, so that consecutive segments are stored on different physical storage devices.\n\n> Striping is useful when a processing device requests data more quickly than a single storage device can provide it. By spreading segments across multiple devices which can be accessed concurrently, total data throughput is increased.\n\nBasically, the computer can read and write your files quicker when talking to two drives than it can talking to one.\n\n### Why **you shouldn't do this**\n\nI want to take a moment and recognize the biggest pitfall of this method of drive management. If *any* drive in your striped set fails, you *will* lose *all* of the data across *all* of your striped drives. It is very difficult to recover files lost to a failed striped set.\n\nOnly do this if you are okay with losing your files on your striped set or you have a backup solution.\n\n### So what is this post actually about?\n\nThe easiest way to logically configure drives in Windows 10 is to use one of two built in tools. Disk Management and Storage Spaces. Almost all online discussion about these tools revolves around the mirroring and parity aspects. Since I couldn't find a great breakdown of how these tools differ in striped set performance and I happen to have my computer taken a part right now, I decided to make my own.\n\nI'll just be using a couple of the drives I own. My results are not necessarily reflective of how these tools work universally, but I believe some data is better than none.\n\nThese are the drives I'll be testing:\n\n- Hitachi GST Travelstar 7K500 HTS725050A9A364–2.5\" 7200 RPM — 2 of them\n- Seagate Momentus ST9750420AS — 2.5\" 7200 RPM\n- WD Red WD20EFRX — 3.5\" 5400 RPM\n- Seagate BarraCuda ST2000DM006–3.5\" 7200 RPM — 2 of them\n- Crucial M500 CT240M500SSD1–2.5\" SSD\n\nThis is a complete hodgepodge of drives dating back all the way to 2010.\n\n> A quick note: I ended up breaking one of my Hitachi drives while testing due to rough handling while it was powered on. (not my proudest moment) This is why I don't have complete results from that array.\n\n### The Methodology\n\nI used a couple of tests to measure drive performance.\n\nFor synthetic, I used CrystalDiskmark 6.0 with a 32Gib test size as my standard benchmark. It is my understanding that this is the most accurate method of benchmarking within CrystalDiskmark.\n\nI also tested a single large file transfer of 19.7 GB as well as a folder containing 201 files of varying size up to 10gb.\n\nAll drives were freshly formatted to NTFS prior to testing.\n\n### On to the testing\n\n### Individual Drives\n\nFirst the synthetic test. Keep in mind this graph is on a logarithmic scale, look at the values rather than the length of the lines. Higher is better.\n\n![Synthetic Benchmark: Higher is better.](02.png)\n\nNext, my own real life benchmarks. In this case, smaller is better.\n\n![Real life benchmarks](03.png)\n\nBasically all of the drives perform exactly as you would expect. I am pleased to see my new Barracuda drives perform better than the Hitachi drives I am replacing. Nothing really to learn here but it will be useful as a comparison for our future tests.\n\n### Drive Pairs\n\nNext up, the Hitachi and Barracuda drive sets in both Striped Set and Simple Pool. This gives us the most general idea of how these tools differ. Once again, mind the logarithmic scale.\n\n![Synthetic Benchmark: Higher is better.](04.png)\n\nThe striped sets consistently outperform the simple pooled storage. Nearly doubling the speed of the Seq Q32T1 Write in both instances. Interestingly while the striped set provides a significant performance benefit, the pooled storage seems to offer little benefit compared to the individual drives.\n\n![Real Life Benchmark: Lower is better.](05.png)\n\nThe real life benchmark confirm my findings, however the results are not as extreme.\n\n### Getting wild with Pooled Storage\n\n### Drive Pairs with SSD\n\nI was interested in seeing how adding an ssd to a pair of identical drives affect performance.\n\n![Synthetic Benchmark: Higher is better.](06.png)\n\n![Real Life Benchmark: Lower is better.](07.png)\n\nA small but consistent improvement.\n\n### Other Pooled Arrangements\n\nI was also interested in how other drive arrangements affected pooled speed.\n\n![Synthetic Benchmark: Higher is better.](08.png)\n\n![Real Life Benchmark: Lower is better.](09.png)\n\n## Conclusions\n\nLets take a look at my initial questions and see if we can draw some conclusions.\n\n- *Are they actually faster than a normal disk configuration?*\n- *Which one should you choose?*\n\n### Are they actually faster than a normal disk configuration?\n\nShort answer, yes, probably. How much is heavily dependent of type of load and disk configuration.\n\n![Performance comparison](10.png)\n\nStriping the disks provided about a 90ish% performance benefit all around.\n\nPooled storage with identical disks seems to slightly hinder sequential performance but it does provide some benefit for random reads and writes. Not quite as much as striping though.\n\nI find it very interesting how adding in an SSD to the pool doesn't affect sequential speeds much but has a tremendous increase on random speeds.\n\n### Which one should you choose?\n\nBased on my results, If you have an identical disk set, you should stripe. The striped set performance was consistently better than the pooled set.\n\nIf you are combining different drives, even if they are the same capacity, it may be worth looking into pooled storage.\n\n## Wrapping up with a few notes\n\nI hope you found my collection of benchmarks interesting and possibly useful. I know this collection of graphs is not the easiest way to ingest the data so I have provided a link to my data in a [spreadsheet here](https://docs.google.com/spreadsheets/d/e/2PACX-1vT3i65ZzbC6_87ep98EPcwiNoEVu-Q4-V46XL5jksELZTkQJg8AoI1Y3vd5N2zax_SKDvLMtCQ3Qs_I/pubhtml?gid=0&single=true).\n\nThanks for reading.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"studying-simple-pooled-storage-and-striped-sets","text":"Studying Simple Pooled Storage and Striped Sets#"},{"depth":3,"slug":"an-introduction-to-storage","text":"An introduction to storage#"},{"depth":3,"slug":"what-are-striped-sets","text":"What are striped sets?#"},{"depth":3,"slug":"why-you-shouldnt-do-this","text":"Why you shouldn’t do this#"},{"depth":3,"slug":"so-what-is-this-post-actually-about","text":"So what is this post actually about?#"},{"depth":3,"slug":"the-methodology","text":"The Methodology#"},{"depth":3,"slug":"on-to-the-testing","text":"On to the testing#"},{"depth":3,"slug":"individual-drives","text":"Individual Drives#"},{"depth":3,"slug":"drive-pairs","text":"Drive Pairs#"},{"depth":3,"slug":"getting-wild-with-pooled-storage","text":"Getting wild with Pooled Storage#"},{"depth":3,"slug":"drive-pairs-with-ssd","text":"Drive Pairs with SSD#"},{"depth":3,"slug":"other-pooled-arrangements","text":"Other Pooled Arrangements#"},{"depth":2,"slug":"conclusions","text":"Conclusions#"},{"depth":3,"slug":"are-they-actually-faster-than-a-normal-disk-configuration","text":"Are they actually faster than a normal disk configuration?#"},{"depth":3,"slug":"which-one-should-you-choose","text":"Which one should you choose?#"},{"depth":2,"slug":"wrapping-up-with-a-few-notes","text":"Wrapping up with a few notes#"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
