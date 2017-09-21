define(["exports"], function(r)
{
    //var a=5;
    //var b=6;
    function getMyValue()
    {
        return getOriginalValue();
    }

    function getOriginalValue()
    {
        return "hello";
    }

    r.getMyValue = getMyValue;
});