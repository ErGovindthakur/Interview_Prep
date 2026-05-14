### YAML Syntax Quick-Reference Cheat SheetA concise, single-screen lookup guide for your interview preparation.

#### A concise, single-screen lookup guide for your interview preparation.

### 1. Text & Multiline Scalars

```yml
# Bare string (alphanumeric only)
image: nginx:alpine

# Quoted strings (use to preserve leading zeros or protect special characters)
zip_code: "01234"
special_char: 'admin@host:#1'

# Literal Block (|) -> Preserves line breaks exactly
command: |
  echo "First line"
  echo "Second line"

# Folded Block (>) -> Collapses line breaks into single spaces
argument: >
  this long string turns
  into a single paragraph
```

### 2. Numbers & Flags
```yaml
# Integer (Whole numbers)
replicas: 3
large_num: 1_000_000   # Underscores are ignored by parsers

# Floating-Point (Decimals)
cpu_limit: 1.5
scientific: 2.5e+0

# Hexadecimal (Base-16)
memory_mask: 0xFF22FF

# Booleans (YAML 1.2 standard)
is_active: true
debug_mode: false      # Avoid yes/no/on/off without quotes
```

### 3. Emptiness & Timestamps
```yaml
# Null values (Unset or Empty markers)
empty_key: null
shorthand_null: ~

# Timestamps (ISO-8601 auto-detected date/time objects)
simple_date: 2026-05-14
full_utc_time: 2026-05-14T16:22:00Z
```

### 4. Arrays & Dictionaries
```yml
# Block Sequence (Hyphenated List - Git Diff Friendly)
ports:
  - "80:80"
  - "443:443"

# Flow Sequence (Inline Array)
command: ["npm", "run", "start"]

# Mapping (Key-Value Dictionary)
metadata:
  environment: production
  tier: backend
```

### 5. DRY Code & Collections
```yml
# Anchors (&), Aliases (*), and Merge Keys (<<:)
x-template: &base_config
  restart: always
  network_mode: bridge

web_service:
  <<: *base_config      # Injects properties from the template anchor
  image: node:18-alpine

# Explicit Type Casting (Overriding Type Inference)
forced_string: !!str 12345
forced_integer: !!int "45"

# Unique Set (Unordered, completely unique keys)
unique_tags: !!set
  ? compliance-pci
  ? compliance-soc2
```