<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>开始JS操作XML</title>
</head>
<body>
    <h1>JS操作XML</h1>
    <script type="text/javascript">
            window.onload=function(){
                var hasXmlDom=document.implementation.hasFeature('XML','2.0');
                alert(hasXmlDom);//IE9下false，firefox下true
            };
        </script>
</body>
</html>
