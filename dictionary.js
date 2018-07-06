module.exports = class Dictionary
{
    constructor(key, value)
    {
        this.key = key;
        this.value = value;
    }

    toString()
    {
        return this.key.toString() + ' : ' + this.value.toString();
    }
}