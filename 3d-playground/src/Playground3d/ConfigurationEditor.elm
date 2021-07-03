module Playground3d.ConfigurationEditor exposing (..)

import Element exposing (Element, none)
import Playground3d.Computer exposing (Computer)


type alias ConfigurationEditor =
    { activeMode : Mode
    }


type Mode
    = Edit
    | ImportExport


init : ConfigurationEditor
init =
    { activeMode = Edit
    }



-- UPDATE


type Msg
    = SelectMode Mode


update : Msg -> ConfigurationEditor -> ConfigurationEditor
update msg configurationEditor =
    case msg of
        SelectMode mode ->
            { configurationEditor | activeMode = mode }



--VIEW


view : Computer -> ConfigurationEditor -> Element Msg
view computer configurationEditor =
    none
