# Solution to respect LSP

To respect the LSP, we have created a new abstract class `Shape` which has the common comportment between a `Square` and a `Rectangle` : calculate the area.

`Rectangle` and `Square` implement their own logic with their own method. In any method where a `Shape` is expected, we will be able to pass a `Rectangle` or a `Square` without problem !
