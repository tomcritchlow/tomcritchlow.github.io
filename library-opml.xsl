<?xml version="1.0"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/opml">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
			<head>
				<title><xsl:value-of select="head/title"/></title>
			<style type="text/css">
					body {
						padding: 2ex;
						font-family: arial, sans-serif;
						font-size: 10pt;
					}

					dl {
						margin-bottom: 2ex;
					}

					dl dl {
						padding-left: 4ex;
						padding-bottom: 2ex;
						margin-left: 1ex;
						border-left: 1px dashed #666;
						border-bottom: 1px dashed #666;
					}

					dd {
						padding: 1ex 1ex 1ex 0;
					}
	</style>
	</head>
	<body>
	    <h2><a><xsl:attribute name="href"><xsl:value-of select="head/url"/></xsl:attribute><xsl:value-of select="head/title"/></a></h2>
				<h3>by <a><xsl:attribute name="href"><xsl:value-of select="head/ownerId"/></xsl:attribute><xsl:value-of select="head/ownerName"/></a></h3>
				<h3>Last update: <xsl:value-of select="head/dateCreated"/></h3>
	<dl>
					<xsl:apply-templates select="body/outline"/>
				</dl>
	</body>
        </html>
</xsl:template>
<xsl:template match="outline" xmlns="http://www.w3.org/1999/xhtml">
    <xsl:choose>
    <xsl:when test="@type='collection'">
        <xsl:choose>
         <xsl:when test="@url!=''">   
         <dt><h1><xsl:if test="@author!='Ton Zijlstra'">Followed </xsl:if>Book List: <a><xsl:attribute name="href"><xsl:value-of select="@url"/></xsl:attribute><xsl:value-of select="@text"/></a></h1><br/><xsl:value-of select="@comment"/></dt>
         <dl>
						<xsl:apply-templates select="outline"/>
					</dl>
         </xsl:when>
         <xsl:otherwise>
        <dt><h1><xsl:if test="@author!='Ton Zijlstra'">Followed </xsl:if>Book List: <xsl:value-of select="@text"/></h1><br/><xsl:value-of select="@comment"/></dt>
        <dl>
						<xsl:apply-templates select="outline"/>
					</dl>
         </xsl:otherwise>
         </xsl:choose> 
    </xsl:when>
    <xsl:when test="@type='rss'">
    <dt><h1><xsl:if test="@author!='Ton Zijlstra'">I'm subscribed to </xsl:if><xsl:if test="@author='Ton Zijlstra'">Subscribe to </xsl:if> book related rss-feed: <xsl:value-of select="@text"/></h1><br/><xsl:value-of select="@comment"/></dt>
        <dl>
						<xsl:if test="@htmlUrl">Web url:<a><xsl:attribute name="href"><xsl:value-of select="@htmlUrl"/></xsl:attribute><xsl:value-of select="@htmlUrl"/></a><br/></xsl:if>
						RSS url: <a><xsl:attribute name="href"><xsl:value-of select="@xmlUrl"/></xsl:attribute><xsl:value-of select="@xmlUrl"/></a>
					</dl>
    </xsl:when>    
    <xsl:otherwise>
    <xsl:choose>
        <xsl:when test="@url!=''">
            <xsl:choose>
                <xsl:when test="@authorurl!=''">
                    <h2><a><xsl:attribute name="href"><xsl:value-of select="@url"/></xsl:attribute><xsl:value-of select="@name"/></a> <em> by </em> <a><xsl:attribute name="href"><xsl:value-of select="@authorurl"/></xsl:attribute><xsl:value-of select="@author"/></a></h2>
                </xsl:when>
                <xsl:otherwise>
                    <h2><a><xsl:attribute name="href"><xsl:value-of select="@url"/></xsl:attribute><xsl:value-of select="@name"/></a> <em> by </em> <xsl:value-of select="@author"/></h2>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:when>
        <xsl:otherwise>
            <xsl:choose>
                <xsl:when test="@authorurl!=''"><h2><xsl:value-of select="@name"/> <em> by </em>  <a><xsl:attribute name="href"><xsl:value-of select="@authorurl"/></xsl:attribute><xsl:value-of select="@author"/></a></h2></xsl:when>
                <xsl:otherwise><h2><xsl:value-of select="@name"/> <em> by </em> <xsl:value-of select="@author"/></h2></xsl:otherwise>
            </xsl:choose>
        </xsl:otherwise>
    </xsl:choose>
    <br/>
    <dd>
            <b>Comment</b>: <xsl:value-of select="@comment"/><br/>
            <b>Tags</b>: <xsl:value-of select="@category"/><br/>
            <b>Language</b>: <xsl:value-of select="@inLanguage"/><br/>
            <b>ISBN</b>: <xsl:value-of select="@isbn"/><br/>
            <b>Found in list</b>: <a href="{@referencelisturl}"><xsl:value-of select="@referencelisturl"/></a><br/>
            <b>Recommended by</b>: <a href="{@referenceurl}"><xsl:value-of select="@referenceurl"/></a><br/>
        </dd>
    </xsl:otherwise>
    </xsl:choose> 
</xsl:template>
</xsl:stylesheet>