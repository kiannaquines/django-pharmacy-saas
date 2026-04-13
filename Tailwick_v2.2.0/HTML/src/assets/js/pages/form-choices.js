
import Choices from 'choices.js'


// Choices Select plugin
var choicesExamples = document.querySelectorAll("[data-choices]");
Array.from(choicesExamples).forEach(function (item) {
    var choiceData = {};
    var isChoicesVal = item.attributes;
    if (isChoicesVal["data-choices-groups"])
        choiceData.placeholderValue = "This is a placeholder set in the config";
    if (isChoicesVal["data-choices-search-false"])
        choiceData.searchEnabled = false;
    if (isChoicesVal["data-choices-search-true"])
        choiceData.searchEnabled = true;
    if (isChoicesVal["data-choices-removeItem"])
        choiceData.removeItemButton = true;
    if (isChoicesVal["data-choices-sorting-false"])
        choiceData.shouldSort = false;
    if (isChoicesVal["data-choices-sorting-true"])
        choiceData.shouldSort = true;
    if (isChoicesVal["data-choices-multiple-remove"])
        choiceData.removeItemButton = true;
    if (isChoicesVal["data-choices-limit"])
        choiceData.maxItemCount = isChoicesVal["data-choices-limit"].value.toString();
    if (isChoicesVal["data-choices-limit"])
        choiceData.maxItemCount = isChoicesVal["data-choices-limit"].value.toString();
    if (isChoicesVal["data-choices-editItem-true"])
        choiceData.maxItemCount = true;
    if (isChoicesVal["data-choices-editItem-false"])
        choiceData.maxItemCount = false;
    if (isChoicesVal["data-choices-text-unique-true"])
        choiceData.duplicateItemsAllowed = false;
    if (isChoicesVal["data-choices-text-disabled-true"])
        choiceData.addItems = false;
    choiceData.allowHTML = true;
    isChoicesVal["data-choices-text-disabled-true"] ? new Choices(item, choiceData).disable() : new Choices(item, choiceData);
});
